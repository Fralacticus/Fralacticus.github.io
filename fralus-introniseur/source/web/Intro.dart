// ignore_for_file: omit_local_variable_types, prefer_single_quotes, unnecessary_this

final int taillefichierasm = 39048; // Se finit sur un multiple de 4

class Bitmap{
  static final String signatureNominale = "BM";
  static final int tailleFichierNominal = 39478;
  static final int largeurNominale  = 240;
  static final int hauteurNominale  = 160;
  static final int bitsParPixelNominal = 8;

  static final int adrDebutSignature = 0x00;
  static final int adrFinSignature = 0x01;

  static final int adrDebutTailleFichier = 0x02; //4 octets LE
  static final int adrFinTailleFichier = 0x05;

  static final int adrDebutLargeur  = 0x12; //4 octets LE
  static final int adrFinLargeur    = 0x15;

  static final int adrDebutHauteur  = 0x16; // 4 octets lE
  static final int adrFinHauteur    = 0x19;

  static final int adrDebutBitsParPixel = 0x1C; // 2 octets LE
  static final int adrFinBitsParPixel = 0x1D;

  static final int adrDebutPalette  = 0x36;
  static final int adrFinPalette    = 0x435;

  static final int adrDebutImage    = 0x436;
  static final int adrFinImage      = 0x9A37;


  List<int> bmpOctets = [];
  int largeur = 0;
  int hauteur = 0;
  List<CouleurPalette> palette = [];
  List<int> paletteAsm = [];
  List<List<int>> image = [];
  List<int> imageAsm = [];

  Bitmap();
  Bitmap.init(List<int> octets){
    this.bmpOctets = octets;
    this.largeur = GetLargeur();
    this.hauteur = GetHauteur();
    GenererPalette();
    GenererPaletteAsm();
    GenererImage();
    GenererImageAsm();
  }

  Map <String,List<dynamic>> estConforme () {
    Map <String,List<dynamic>> conforme = <String,List<dynamic>>{} ;
    conforme["Signature"]     = [GetSignature(), GetSignature() == Bitmap.signatureNominale];
    conforme["Taille"]        = [GetTailleFichier(), GetTailleFichier() == Bitmap.tailleFichierNominal];
    conforme["Largeur"]       = [GetLargeur(),GetLargeur() == Bitmap.largeurNominale];
    conforme["Hauteur"]       = [GetHauteur(),GetHauteur() == Bitmap.hauteurNominale];
    conforme["BitsParPixel"]  = [GetBitsParPixel() ,GetBitsParPixel() == Bitmap.bitsParPixelNominal];
    bool global = true;
    conforme.forEach((cle, valeur) {
      global = global && valeur[1];
    });
    conforme["Globalite"]      =    [global == true ? "OUI": "NON", global];
    return conforme;
  }

  void GenererPalette(){
    for (int i = adrDebutPalette; i <= adrFinPalette + 1 - 4; i += 4){
      this.palette.add(CouleurPalette.init(this.bmpOctets.sublist(i, i + 4)));
    }
  }

  void GenererPaletteAsm(){
    for (CouleurPalette couleur in this.palette){
      this.paletteAsm.add(int.parse(couleur.couleur15Bit[2]+couleur.couleur15Bit[3], radix: 16));
      this.paletteAsm.add(int.parse(couleur.couleur15Bit[0]+couleur.couleur15Bit[1], radix: 16));
    }
  }

  void GenererImage(){
    for (int i = adrDebutImage; i <= adrFinImage + 1 - largeurNominale; i+= largeurNominale){
      this.image.add(this.bmpOctets.sublist(i, i+ largeurNominale));
    }
  }

  void GenererImageAsm(){
    List<List<int>> imageDecoup = this.image.reversed.toList();
    List<int> imageApplatie = imageDecoup.expand((index) => index).toList();
    this.imageAsm = imageApplatie.toList();
  }

  int GetLargeur(){
   List<int> largeurBrute = this.bmpOctets.sublist(Bitmap.adrDebutLargeur, Bitmap.adrFinLargeur + 1);
   return int.parse((largeurBrute.reversed).map((e) => e.toRadixString(16).padLeft(2,'0')).join(), radix:16) ;
  }

  int GetHauteur(){
    List<int> hauteurBrute = this.bmpOctets.sublist(Bitmap.adrDebutHauteur, Bitmap.adrFinHauteur + 1);
    return int.parse((hauteurBrute.reversed).map((e) => e.toRadixString(16).padLeft(2,'0')).join(), radix:16) ;
  }

  int GetTailleFichier(){
    List<int> tailleBrute = this.bmpOctets.sublist(Bitmap.adrDebutTailleFichier, Bitmap.adrFinTailleFichier + 1);
    return int.parse((tailleBrute.reversed).map((e) => e.toRadixString(16).padLeft(2,'0')).join(), radix:16) ;
  }

  int GetBitsParPixel(){
    List<int> bitsParPixelBrute = this.bmpOctets.sublist(Bitmap.adrDebutBitsParPixel, Bitmap.adrFinBitsParPixel + 1);
    return int.parse((bitsParPixelBrute.reversed).map((e) => e.toRadixString(16).padLeft(2,'0')).join(), radix:16) ;
  }

  String GetSignature(){
    List<int> signatureBrute = this.bmpOctets.sublist(Bitmap.adrDebutSignature, Bitmap.adrFinSignature + 1);
    return (String.fromCharCode(signatureBrute[0]) + String.fromCharCode(signatureBrute[1]));
  }
  List<int> ConstruireAsm (int adrIntroRom, List<int> pointeurRetour) {
    List<int> enTete = [0xFF, 0x25, 0x00, 0xEA];
    // paletteASM
    // imageASM
    List<int> pied1 =
    [0x54, 0x00, 0x9F, 0xE5, 0x54, 0x10, 0x9F, 0xE5, 0x00, 0x10, 0xA0, 0xE4, 0x50, 0x00, 0x9F,
      0xE5, 0x50, 0x10, 0x9F, 0xE5, 0x50, 0x30, 0x9F, 0xe5, 0x50, 0x40, 0x9f, 0xE5, 0x50, 0x50,
      0x9F, 0xE5, 0x50, 0x60, 0x9F, 0xE5, 0x04, 0x70, 0xB5, 0xE4, 0x04, 0x70, 0xA4, 0xE4, 0x01,
      0x60, 0x56, 0xE2, 0xFB, 0xFF, 0xFF, 0x1A, 0x04, 0x20, 0xB1, 0xE4, 0x04, 0x20, 0xA0, 0xE4,
      0x01, 0x30, 0x53, 0xE2, 0xFB, 0xFF, 0xFF, 0x1A, 0x30, 0x40, 0x9F, 0xE5, 0x00, 0x50, 0xB4,
      0xE4, 0x08, 0x50, 0x15, 0xE2, 0xFB, 0xFF, 0xFF, 0x1A, 0x24, 0x60, 0x9F, 0xE5, 0x16, 0xFF,
      0x2F, 0xE1, 0x00, 0x00, 0x00, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06];
    List<int> pointeurImage = GenererPointeur(adrIntroRom + 516);
    List<int> pied2 = [0x00, 0x4B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05];
    List<int> pointeurPalette = GenererPointeur(adrIntroRom + 4);
    List<int> pied3 = [0x00, 0x01, 0x00, 0x00, 0x30, 0x01, 0x00, 0x04];
    // pointeurRetour
    List<int> introAsm = enTete + paletteAsm + imageAsm + pied1 + pointeurImage + pied2 + pointeurPalette + pied3 + pointeurRetour;
    return introAsm;
  }
}

class CouleurPalette{
  List<int> couleurBrute = [];
  int R = 0;
  int V = 0;
  int B = 0;
  String couleur15Bit = "";

  CouleurPalette();
  CouleurPalette.init(List<int> couleurBrute){ // 4 octets, le dernier juste un séparateur
    this.couleurBrute = couleurBrute;
    this.R = couleurBrute[2];
    this.V = couleurBrute[1];
    this.B = couleurBrute[0];
    this.couleur15Bit = (((this.B/8).floor() << 10) + ((this.V/8).floor() << 5) + (this.R/8).floor()).toRadixString(16).padLeft(4, '0');
  }
}

List<int> Intro({required List<int> bmp, required List<int> gbaOriginale, required int adrIntroRom}) {

  Bitmap introBmp = Bitmap.init(bmp);
  print("Signature : ${introBmp.GetSignature()}");
  print("Taille fichier : ${introBmp.GetTailleFichier()}");
  print("Largeur : ${introBmp.GetLargeur()}");
  print("Hauteur : ${introBmp.GetHauteur()}");
  print("Bits par pixel : ${introBmp.GetBitsParPixel()}");

  // Validation image BMP
  if (!introBmp.estConforme()["Globalite"]![1]){
    throw("Fichier BMP non conforme");
  }

  // Validation adrese Insertion
  if(!validerAdresse(adrIntroRom, gbaOriginale)){
    throw("Adresse insertion erronée");
  }

  // Génération du pointeur de retour
  List<int> pointeurRetour = GenererPointeurRetour(gbaOriginale.sublist(0x00, 0x02 + 1));

  // Génération de l'intro
  List<int> intro = introBmp.ConstruireAsm(adrIntroRom, pointeurRetour);


  // Génération du nouvau pointeur vers l'intro
  int adrStarOffset = 0x000000;
  int valeurStartOffset = (adrIntroRom - 8) ~/ 4;
  List<int> pointeurIntro = GenererStartOffset(valeurStartOffset);

  // Modification de la rom
  gbaOriginale.setAll(adrStarOffset, pointeurIntro);
  gbaOriginale.setAll(adrIntroRom, intro);

  return gbaOriginale;

}

List<int> GenererPointeur(int pointeurInt){
  String pointeur =  pointeurInt.toRadixString(16).padLeft(6, '0');
  pointeur = "08"+ pointeur;

  RegExp exp = RegExp(r".{2}");
  Iterable<Match> matches = exp.allMatches(pointeur);
  List<int> maListe = (matches.map((m) => int.parse(m[0].toString(), radix: 16))).toList().reversed.toList();
  return maListe;
}

List<int> GenererStartOffset(int pointeurInt){
  String pointeur =  pointeurInt.toRadixString(16).padLeft(6, '0');
  RegExp exp = RegExp(r".{2}");
  Iterable<Match> matches = exp.allMatches(pointeur);
  List<int> maListe = (matches.map((m) => int.parse(m[0].toString(), radix: 16))).toList().reversed.toList();
  return maListe;
}

List<int> GenererPointeurRetour(List<int> startOffset){ // 3 premiers octets de la rom originale
  int adr1erEcranBrute = int.parse((startOffset.reversed).map((e) => e.toRadixString(16).padLeft(2,'0')).join(), radix:16) ;
  int adresse = adr1erEcranBrute * 4 + 8;
  return GenererPointeur(adresse);
}

bool validerAdresse(int adresseInsertion, List<int> romOriginale){
  if (adresseInsertion % 4 != 0){
    print("adresse pas multiple de 4");
    return false;
  }
  if (adresseInsertion < 0 ){
    print("adresse negative");
    return false;
  }
  int placeDispo = romOriginale.length - adresseInsertion;
  if (taillefichierasm > placeDispo){
    print("adresse trop proche");
    return false;
  }
  print("adresse correcte");
  return true;
}
int calculerAdresseMax(List<int> romOriginale){
  return romOriginale.length - taillefichierasm;
}

