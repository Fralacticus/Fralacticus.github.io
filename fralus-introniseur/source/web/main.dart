// ignore_for_file: omit_local_variable_types, prefer_single_quotes, unnecessary_this
import 'dart:convert';
import 'dart:html';
import 'Intro.dart';


class Gui {
  static ButtonElement boutonChoisirImage = querySelector('#boutonChoisirImage') as ButtonElement;
  static InputElement nomImage = querySelector('#nomImage') as InputElement;
  static DivElement boiteImage = querySelector("#boiteImage") as DivElement;
  static ImageElement imageGba = querySelector("#imageGba") as ImageElement;

  static ButtonElement boutonChoisirRom = querySelector("#boutonChoisirRom") as ButtonElement;
  static InputElement nomGBA = querySelector('#nomGBA') as InputElement;

  static InputElement inputAdresseDec = querySelector('#inputAdresseDec') as InputElement;
  static InputElement inputAdresseHex = querySelector('#inputAdresseHex') as InputElement;

  static UListElement ulValidationImage = querySelector('#ulValidationImage') as UListElement;

  static TableElement tableValidation = querySelector('#tableValidation') as TableElement;

  static ButtonElement boutonInsererIntro = querySelector('#boutonInsererIntro') as ButtonElement;

  static ParagraphElement alerteAdresseInvalide= querySelector('#alerteAdresseInvalide') as ParagraphElement;

}

// Variables globales
List<int> image = [];
List<int> rom = [];
List<int> romModif =[];
int posInsertion = -1;
String nomGbaOriginale = "";

bool imageOk = false;
bool romOk = false;
bool  posInsertionOk = false;




void main() {
  chargement();
  Gui.boutonChoisirImage.onClick.listen(chargerImage);
  Gui.nomImage.onKeyDown.listen((e) => e.preventDefault());
  Gui.boutonChoisirRom.onClick.listen(lireFichierGba);
  Gui.nomGBA.onKeyDown.listen((e) => e.preventDefault());
  Gui.inputAdresseDec.onInput.listen((_) => toInputHex());
  Gui.inputAdresseHex.onInput.listen((_) => toInputDec());
  Gui.inputAdresseHex.onKeyPress.listen(typerHex);
  Gui.boutonInsererIntro.onClick.listen((e) {
      e.preventDefault();
      try {
        romModif = Intro(bmp: image, gbaOriginale: rom.toList(), adrIntroRom: posInsertion);
      }
      catch(e) {
        window.alert("Erreur d'insertion : \n$e");
        return;
      }
      AnchorElement lien =  AnchorElement();
      lien.href = Uri.dataFromBytes(romModif).toString();
      lien.download = nomGbaOriginale.substring(0, nomGbaOriginale.length-4) + "_avecIntro.gba";
      lien.click();
  });


}

void chargement(){
  // chargement colonne validation bmp

  Gui.tableValidation.rows[2].cells[1].text = Bitmap.signatureNominale.toString() ;
  Gui.tableValidation.rows[3].cells[1].text = Bitmap.tailleFichierNominal.toString() ;
  Gui.tableValidation.rows[4].cells[1].text = Bitmap.largeurNominale.toString() ;
  Gui.tableValidation.rows[5].cells[1].text = Bitmap.hauteurNominale.toString() ;
  Gui.tableValidation.rows[6].cells[1].text = Bitmap.bitsParPixelNominal.toString() ;
}

void typerHex(KeyboardEvent e){
  RegExp regExp = RegExp("[a-fA-F0-9]");
  if (!regExp.hasMatch( e.key.toString())){
    e.preventDefault();
  }
}

void toInputHex(){
  String? valeurDec =  Gui.inputAdresseDec.value;
  int? valeurParseDec = int.tryParse(valeurDec!);
  if (valeurParseDec == null){
    Gui.inputAdresseHex.value = null;
    posInsertionOk = false;
    evaluerBoutonInsertion();
    return;
  }
  posInsertion =  valeurParseDec;
  if(validerAdresse(valeurParseDec, rom) == false){
    print("toInputHex: false");
    posInsertionOk = false;
    Gui.inputAdresseDec.setCustomValidity("naz");
    Gui.inputAdresseHex.setCustomValidity("naz");
  }
  else{
    print("toInputHex: true");
    posInsertionOk = true;
    Gui.inputAdresseDec.setCustomValidity("");
    Gui.inputAdresseHex.setCustomValidity("");
  }

  evaluerBoutonInsertion();
  Gui.inputAdresseHex.value = valeurParseDec.toRadixString(16).toUpperCase();
}

void toInputDec(){
  String? valeurHex = Gui.inputAdresseHex.value;
  int? valeurParseDec = int.tryParse(valeurHex!, radix:16);
  if (valeurParseDec == null){
    Gui.inputAdresseDec.value = null;
    posInsertionOk = false;
    evaluerBoutonInsertion();
    return;
  }
  posInsertion =  valeurParseDec;
  if(validerAdresse(valeurParseDec, rom) == false){
    print("toInputDec : false");
    posInsertionOk = false;
    Gui.inputAdresseDec.setCustomValidity("naz");
    Gui.inputAdresseHex.setCustomValidity("naz");
  }
  else{
    print("toInputDec : true");
    posInsertionOk = true;
    Gui.inputAdresseDec.setCustomValidity("");
    Gui.inputAdresseHex.setCustomValidity("");
  }
  evaluerBoutonInsertion();
  Gui.inputAdresseDec.value = valeurParseDec.toString();
}


void chargerImage(Event e){

  FileUploadInputElement filePicker = FileUploadInputElement();
  filePicker.accept=".bmp";
  filePicker.onChange.listen((_) {
    FileReader fr = FileReader();
    fr.onLoad.listen((_){
      Gui.imageGba.src = fr.result as String?;
      Gui.nomImage.value = filePicker.files!.first.name;
      try{
        image = base64.decode(fr.result.toString().split(',').last);
      }
      catch(e){
        imageOk = false;
        evaluerBoutonInsertion();
        print(e);
        return;
      }
      verifierBmp();
    });
    fr.readAsDataUrl(filePicker.files!.first);
  });
  filePicker.click();
}



void lireFichierGba(Event e){
  FileUploadInputElement filePicker = FileUploadInputElement();
  filePicker.accept =".gba";
  filePicker.onChange.listen((_) {
    FileReader fr = FileReader();
    fr.onLoad.listen ((_)  {
      rom = fr.result as List<int>;
      Gui.inputAdresseDec.max=calculerAdresseMax(rom).toString();
      Gui.alerteAdresseInvalide.text = "Entrez une adresse d'insertion, multiple de 4, et <= ${calculerAdresseMax(rom)}";
      Gui.nomGBA.value = filePicker.files!.first.name;
      nomGbaOriginale = filePicker.files!.first.name;
      romOk = true;
      evaluerBoutonInsertion();
      toInputDec();
    });
    fr.readAsArrayBuffer(filePicker.files!.first);
  });
  filePicker.click();
}

void enregistrerGba(Event e){
  AnchorElement lien =  AnchorElement();
  lien.href = Uri.dataFromBytes(romModif).toString();
  lien.download ="cazouilleur.gba";
  lien.click();
}

class ElemEnTete{
  String nom = "";
  int taille    = 0;
  int position  = 0;
  bool valide = false;
  String valeur = "";

  ElemEnTete.init(String nom, int taille, int position){
    this.nom = nom;
    this.taille = taille;
    this.position = position;
  }
}


void verifierBmp(){
  try {
    Bitmap bmp = Bitmap();
    bmp.bmpOctets = image;
    Map conformite = bmp.estConforme();
    int i = 2;
    conformite.forEach((cle, valeur) {
      Gui.tableValidation.rows[i].cells[2].text = valeur[0].toString() ;
      Gui.tableValidation.rows[i].cells[2].classes.clear();
      if (valeur[1] == true){
        Gui.tableValidation.rows[i].cells[2].classes.add('liOK');
      }
      else{
        Gui.tableValidation.rows[i].cells[2].classes.add('liX');
      }
      i+=1;
    });
    conformite["Globalite"][1] ? imageOk = true : imageOk = false;
    evaluerBoutonInsertion();
  }
  catch(e){
    print(e);
      for (int i = 2; i <8; i++){
        Gui.tableValidation.rows[i].cells[2].classes.clear();
        Gui.tableValidation.rows[i].cells[2].classes.add('liX');
        Gui.tableValidation.rows[i].cells[2].text = "X" ;
      }
  }
}

void evaluerBoutonInsertion(){
  bool pourInsertionOk = imageOk & romOk & posInsertionOk;
  if(pourInsertionOk == true){
    Gui.boutonInsererIntro.disabled = false;
    return ;
  }
  Gui.boutonInsererIntro.disabled = true;
}