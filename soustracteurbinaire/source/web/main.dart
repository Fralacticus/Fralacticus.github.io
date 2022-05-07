import 'dart:async';
import 'dart:html';

class Gui {
  static InputElement champADecimal = querySelector('#A-Decimal') as InputElement;
  static InputElement champABinaire = querySelector('#A-Binaire') as InputElement;

  static InputElement champBDecimal = querySelector('#B-Decimal') as InputElement;
  static InputElement champBBinaire = querySelector('#B-Binaire') as InputElement;

  static AnchorElement boutonMoins = querySelector('#Bouton-Moins') as AnchorElement;
  static InputElement champNbBits = querySelector('#Nb-Bits') as InputElement;
  static AnchorElement boutonPlus = querySelector('#Bouton-plus') as AnchorElement;

  static InputElement boutonSoustraire = querySelector('#Bouton-Soustraire') as InputElement;

  static InputElement champResDecimalSigne = querySelector('#Result-Decimal-Signe') as InputElement;
  static InputElement champResDecimalNonSigne = querySelector('#Result-Decimal-NonSigne') as InputElement;
  static InputElement champResBinaireNonSigne = querySelector('#Result-Binaire-NonSigne') as InputElement;

  static Element paragrapheDetails = querySelector('#Paragraphe') as Element;
}

int? nbBits = 8;
int? ADecimal  = null;
int? BDecimal = null;

void Initialisation(){
  Gui.champADecimal.value = "";
  Gui.champABinaire.value = "";
  Gui.champNbBits.value = nbBits.toString();
}

void main() {

  Initialisation();
  Gui.champADecimal.onInput.listen(changeADecimal);
  Gui.champABinaire.onInput.listen(changeABinaire);

  Gui.champBDecimal.onInput.listen(changeBDecimal);
  Gui.champBBinaire.onInput.listen(changeBBinaire);

  Gui.boutonMoins.onClick.listen(cliqueMoins);
  Gui.champNbBits.onChange.listen(changeNbBits);
  Gui.boutonPlus.onClick.listen(cliquePlus);

  Gui.boutonSoustraire.onClick.listen(lancerSoustraction);

}

Future<void> lancerSoustraction(Event e) async {
  Gui.boutonSoustraire.disabled = true;
  Gui.boutonSoustraire.style.cursor = "wait";
  // Vérifications champs
  if(nbBits == null || ADecimal == null || BDecimal == null || nbBits! < 1 || nbBits! > 64 || ADecimal! < 0 || BDecimal! < 0) {
    Gui.paragrapheDetails.innerHtml = "";
    Gui.boutonSoustraire.disabled = false;
    Gui.boutonSoustraire.style.cursor = "pointer";

    return;
  }


  // Lancer calculs
  Gui.champResDecimalSigne.value = (ADecimal! - BDecimal!).toString();
  Gui.champResDecimalNonSigne.value = (ADecimal! - BDecimal!).toUnsigned(nbBits!).toString();
  Gui.champResBinaireNonSigne.value = (ADecimal! - BDecimal!).toUnsigned(nbBits!).toRadixString(2).padLeft(nbBits!, '0');

  // Details
  await calcAnimation(ADecimal as int, BDecimal as int, nbBits as int) ;
  Gui.boutonSoustraire.disabled = false;
  Gui.boutonSoustraire.style.cursor = "pointer";

}

void cliqueMoins(Event e){
  if (nbBits != null){
    nbBits = nbBits!-1;
    Gui.champNbBits.value = nbBits.toString();
  }
}

void changeNbBits(Event e){
  nbBits = int.tryParse(Gui.champNbBits.value!);
}

void cliquePlus(Event e){
  if (nbBits != null ){
    nbBits = nbBits! + 1;
    Gui.champNbBits.value = nbBits.toString();
  }
}

void changeABinaire(Event e){
  ADecimal = int.tryParse(Gui.champABinaire.value!, radix: 2);
  if (ADecimal != null){
    Gui.champADecimal.value = ADecimal.toString();
  }
  else{
    Gui.champADecimal.value = "";
  }
}

void changeADecimal(Event e){
  ADecimal = int.tryParse(Gui.champADecimal.value!);
  if (ADecimal != null){
    Gui.champABinaire.value = ADecimal!.toRadixString(2);
  }
  else{
    Gui.champABinaire.value = "";
  }
}

void changeBBinaire(Event e){
  BDecimal = int.tryParse(Gui.champBBinaire.value!, radix: 2);
  if (BDecimal != null){
    Gui.champBDecimal.value = BDecimal.toString();
  }
  else{
    Gui.champBDecimal.value = "";
  }
}

void changeBDecimal(Event e){
  BDecimal = int.tryParse(Gui.champBDecimal.value!);
  if (BDecimal != null){
    Gui.champBBinaire.value = BDecimal!.toRadixString(2);
  }
  else{
    Gui.champBBinaire.value = "";
  }
}


Future<int> calcAnimation(int a, int b, int bits)  async {


  String sortie = "";
  Gui.paragrapheDetails.innerHtml = sortie;


  String aInter = a.toRadixString(2).padLeft(bits, '0');
  String bInter = b.toRadixString(2).padLeft(bits, '0');

  List<int> aBin = aInter
      .substring(aInter.length - bits, aInter.length)
      .split('')
      .map((e) => int.parse(e))
      .toList();
  List<int> bBin = bInter
      .substring(bInter.length - bits, bInter.length)
      .split('')
      .map((e) => int.parse(e))
      .toList();



  List<int> res = List<int>.filled(bits, 9);
  sortie = "\n";
  sortie += " " * (bits - 1) * 3 + " " + "⇓\n"; //⇓↓˯
  sortie += "$aBin\n";
  sortie += "$bBin\n";
  sortie += "-" * bits * 3 + "\n";
  sortie += "$res\n".replaceAll("9", "_");
  Gui.paragrapheDetails.innerHtml = sortie;

  window.scrollTo(document.body!.scrollTop, document.body!.scrollHeight);

  for (int i = bits - 1; i >= 0; i--) {
    sortie = "\n";
    sortie += " " * i * 3 + " " + "⇓\n"; //⇓↓˯
    sortie += "$aBin\n";
    sortie += "$bBin\n";
    sortie += "-" * bits * 3 + "\n";
    sortie += "$res\n".replaceAll("9", "_");
    await Future.delayed(Duration(seconds: 1));
    Gui.paragrapheDetails.innerHtml = sortie;


    int sub = aBin[i] - bBin[i];
    if ([0, 1].contains(sub)) {
      res[i] = sub;
      sortie = "\n";
      sortie += " " * i * 3 + " " + "<font color='#1EB220'>⇓</font>\n"; //⇓↓˯
      sortie += "$aBin\n";
      sortie += "$bBin\n";
      sortie += "-" * bits * 3 + "\n";
      sortie += "$res\n".replaceAll("9", "_");
      await Future.delayed(Duration(seconds: 1));
      Gui.paragrapheDetails.innerHtml = sortie;

    } else {
      sortie = "";
      sortie += " " * i * 3 + " " + "↓\n";
      sortie += " " * i * 3 + " " + "⇓\n";
      sortie += "$aBin\n";
      sortie += "$bBin\n";
      sortie += "-" * bits * 3 + "\n";
      sortie += "$res\n".replaceAll("9", "_");;
      await Future.delayed(Duration(seconds: 1));
      Gui.paragrapheDetails.innerHtml = sortie;
      aBin[i] = 2;
      sortie = "";
      sortie += " " * i * 3 + " " + "<font color='#ff00ff'>↓</font>\n";
      sortie += " " * i * 3 + " " + "⇓\n";
      sortie += "$aBin\n";
      sortie += "$bBin\n";
      sortie += "-" * bits * 3 + "\n";
      sortie += "$res\n".replaceAll("9", "_");
      await Future.delayed(Duration(seconds: 1));
      Gui.paragrapheDetails.innerHtml = sortie;

      bool estOk = false;
      int j = i;
      while (estOk == false && j > 0) {
        sortie = "";
        sortie += " " * (j-1) * 3 + " " + "↓\n";
        sortie += " " * i * 3 + " " + "⇓\n";
        sortie += "$aBin\n";
        sortie += "$bBin\n";
        sortie += "-" * bits * 3 + "\n";
        sortie += "$res\n".replaceAll("9", "_");
        await Future.delayed(Duration(seconds: 1));
        Gui.paragrapheDetails.innerHtml = sortie;
        if (aBin[j - 1] == 1) {
          estOk = true;
          aBin[j - 1] = 0;
        } else if (aBin[j - 1] == 0) {
          aBin[j - 1] = 1;
        }

        j--;

        sortie = "";
        sortie += " " * j * 3 + " " + "<font color='#ff00ff'>↓</font>\n";
        sortie += " " * i * 3 + " " + "⇓\n";
        sortie += "$aBin\n";
        sortie += "$bBin\n";
        sortie += "-" * bits * 3 + "\n";
        sortie += "$res\n".replaceAll("9", "_");
        await Future.delayed(Duration(seconds: 1));
        Gui.paragrapheDetails.innerHtml = sortie;


      }
      i++;

    }
  }

  sortie = "\n\n";
  sortie += "$aBin\n";
  sortie += "$bBin\n";
  sortie += "-" * bits * 3 + "\n";
  sortie += "$res\n".replaceAll("9", "_");
  await Future.delayed(Duration(seconds: 1));
  Gui.paragrapheDetails.innerHtml = sortie;

  return 0;
}

String calculateur(int a, int b, int bits) {
  String sortie = "";

  sortie += "Soustraction à effectuer :\n";
  sortie += "Decimal => $a - $b\n";
  sortie += "Binaire => ${a.toRadixString(2)} - ${b.toRadixString(2)}\n";
  sortie += "Nombre de bits => $bits\n";

  String aInter = a.toRadixString(2).padLeft(bits, '0');
  String bInter = b.toRadixString(2).padLeft(bits, '0');
  sortie += "$aInter\n";
  sortie += "$bInter\n";
  List<int> aBin = aInter
      .substring(aInter.length - bits, aInter.length)
      .split('')
      .map((e) => int.parse(e))
      .toList();
  List<int> bBin = bInter
      .substring(bInter.length - bits, bInter.length)
      .split('')
      .map((e) => int.parse(e))
      .toList();

  sortie += "$aBin\n";
  sortie += "$bBin\n";

  List<int> res = List<int>.filled(bits, 0);
  sortie += "Lancement boucle :\n";

  for (int i = bits - 1; i >= 0; i--) {
    sortie += "\nOPERATION:\n";
    sortie += " " * i * 3 + " " + "↓\n"; //⇓↓˯
    sortie += "$aBin\n";
    sortie += "$bBin\n";
    int sub = aBin[i] - bBin[i];
    if ([0, 1].contains(sub)) {
      //res = [sub] + res;
      res[i] = sub;
      sortie += "-" * bits * 3 + "\n";
      sortie += "$res\n";
    } else {
      String titreBase = "@@@ Transfo @@@";
      String titre = "";
      int nbAro = (bits * 3) - titreBase.length;
      if (nbAro > 1) {
        nbAro = (nbAro / 2).ceil();
        titre = "@" * nbAro + titreBase + "@" * nbAro + "\n";
        sortie += "$titre\n";
      } else {
        titre = titreBase;
        sortie += "$titre\n";
      }

      sortie += "$aBin\n";
      aBin[i] = 2;
      sortie += " " * i * 3 + " " + "↓\n";
      sortie += "$aBin\n";
      bool estOk = false;
      int j = i;
      while (estOk == false && j > 0) {
        if (aBin[j - 1] == 1) {
          estOk = true;
          aBin[j - 1] = 0;
        } else if (aBin[j - 1] == 0) {
          aBin[j - 1] = 1;
        }
        j--;
        sortie += " " * j * 3 + " " + "↓\n";
        sortie += "$aBin\n";
      }
      i++;
      sortie += "@" * titre.length + "\n";
    }
  }
  int finale = int.parse(res.join(), radix: 2);
  sortie += "\nFINALE -> $res -> $finale\n";
  return sortie;
}
