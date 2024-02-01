 

#include <Adafruit_Fingerprint.h>

#if (defined(__AVR__) || defined(ESP8266)) && !defined(__AVR_ATmega2560__)
// For UNO and others without hardware serial, we must use software serial...
// pin #2 is IN from sensor (GREEN wire)
// pin #3 is OUT from arduino  (WHITE wire)
// Set up the serial port to use softwareserial..
SoftwareSerial mySerial(2, 3);

#else
// On Leonardo/M0/etc, others with hardware serial, use hardware serial!
// #0 is green wire, #1 is white
#define mySerial Serial1

#endif
bool out= false;

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

uint8_t id;

void setup()
{
  Serial.begin(115200);
  while (!Serial);  // For Yun/Leo/Micro/Zero/...
  delay(100);
  Serial.println("\n\nAdafruit finger detect test");
  Serial.println("\n\nAdafruit Fingerprint sensor enrollment");

  // set the data rate for the sensor serial port
  finger.begin(57600);
  delay(5);
  if (finger.verifyPassword()) {
    Serial.println("Found fingerprint sensor!");
  } else {
    Serial.println("Did not find fingerprint sensor :(");
    while (1) { delay(1); }
  }

  Serial.println(F("Reading sensor parameters"));
  finger.getParameters();

  finger.getTemplateCount();

  if (finger.templateCount == 0) {
    Serial.print("Sensor doesn't contain any fingerprint data. Please run the 'enroll' example.");
  }
  else {
    Serial.println("Waiting for valid finger...");
      Serial.print("Sensor contains "); Serial.print(finger.templateCount); Serial.println(" templates");
  }
}

// Code for parsing 'id' to associate with the finger print
uint8_t readnumber(void) {
  uint8_t num = 0;

  while (num == 0) {
    while (! Serial.available());
    num = Serial.parseInt();
  }
  return num;
}

void loop()                     // run over and over again
{
  while (Serial.available()==0){
  }

// Read data from arduino
String receivedCmd;
receivedCmd = Serial.readStringUntil('\r');
// receivedCmd = Serial.readStringUntil('\n');
Serial.println(receivedCmd);
// scan user and send the id to bakcend
if (receivedCmd == "scanUser") {
  Serial.println("Recieved the cmd and ready to scan and verifys");
  while (true){
    getFingerprintID();
    delay(50);            //don't need to run this at full speed.

  // Checking
    receivedCmd = Serial.readStringUntil('\r');
    if (receivedCmd == "Done") {
      break;
    }
  }

  
}

// scan user and register it
else if (receivedCmd == "register") {
  out = false;
  Serial.println("ReadyToEnrol");
  while (true) {
    id = readnumber();
    if (id == 0) {// ID #0 not allowed, try again!
      return;
    }
    Serial.print("Enrolling ID #");
    Serial.println(id);
    // Checking
    // receivedCmd = Serial.readStringUntil('\r');
    while (!  getFingerprintEnroll() );
    if (out == true) {
      Serial.println("outed of the loop!");
      break;
    }
  }
  
}

  
}

// ---------------------------Register(addFingerPrint) methods------------------------------
uint8_t getFingerprintEnroll() {

  int p = -1;
  Serial.print("Waiting for valid finger to enroll as #"); Serial.println(id);
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.print(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      // Serial.println("Communication error");
      Serial.println("Error");
      break;
    case FINGERPRINT_IMAGEFAIL:
      // Serial.println("Imaging error");
      Serial.println("Error");
      break;
    default:
      // Serial.println("Unknown error");
      Serial.println("Error");
      break;
    }
  }

  // OK success!

  p = finger.image2Tz(1);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      // Serial.println("Image too messy");
      Serial.println("Error");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      // Serial.println("Communication error");
      Serial.println("Error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      // Serial.println("Could not find fingerprint features");
      Serial.println("Error");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      // Serial.println("Could not find fingerprint features");
      Serial.println("Error");
      return p;
    default:
      // Serial.println("Unknown error");
      Serial.println("Error");
      return p;
  }

  Serial.println("Remove finger");
  delay(2000);
  p = 0;
  while (p != FINGERPRINT_NOFINGER) {
    p = finger.getImage();
  }
  Serial.print("ID "); Serial.println(id);
  p = -1;
  Serial.println("Place same finger again");
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.print(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      // Serial.println("Communication error");
      Serial.println("Error");
      break;
    case FINGERPRINT_IMAGEFAIL:
      // Serial.println("Imaging error");
      Serial.println("Error");
      break;
    default:
      // Serial.println("Unknown error");
      Serial.println("Error");
      break;
    }
  }

  // OK success!

  p = finger.image2Tz(2);
  if (p == FINGERPRINT_OK) {
  Serial.println("Image converted");
} else {
  // Serial.println("Image convertion Error");
  Serial.println("Error");
  out = true;
}


  // OK converted!
  Serial.print("Creating model for #");  Serial.println(id);

  p = finger.createModel();
  if (p == FINGERPRINT_OK) {
    Serial.println("Prints matched!");
  } else {
    // Serial.println("Finger print match Error.");
    Serial.println("Error");
    out = true;
    return p;
  }

  Serial.print("ID "); Serial.println(id);
  p = finger.storeModel(id);
  if (p == FINGERPRINT_OK) {
    Serial.println("Stored!");
    out = true;
    return "Stored!";
  } else {
    // Serial.println("Error, Not saved");
    out = true;
    Serial.println("Error");
  }

  return true;
}



// -----------------------------------Scan methods-----------------------------------------
uint8_t getFingerprintID() {
  // Serial.println("Scanning methods running");
  uint8_t p = finger.getImage();
  switch (p) {
    case FINGERPRINT_OK:
      // Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      // Serial.println("No finger detected");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Imaging error");
      return p;
    default:
      Serial.println("Unknown error");
      return p;
  }

  // OK success!

  p = finger.image2Tz();
  switch (p) {
    case FINGERPRINT_OK:
      // Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      // Serial.println("Image too messy");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      // Serial.println("Communication error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      // Serial.println("Could not find fingerprint features");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      // Serial.println("Could not find fingerprint features");
      return p;
    default:
      // Serial.println("Unknown error");
      return p;
  }

  // OK converted!
  p = finger.fingerSearch();
  if (p == FINGERPRINT_OK) {
    // Serial.println("Found a print match!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    // Serial.println("Communication error");
    return p;
  } else if (p == FINGERPRINT_NOTFOUND) {
    Serial.println("NoMatch");
    return p;
  } else {
    // Serial.println("Unknown error");
    return p;
  }

  // found a match!
  // Serial.print("Found ID #"); 
  Serial.println(finger.fingerID);
  // Serial.print(" with confidence of "); Serial.println(finger.confidence);

  return finger.fingerID;
}


// returns -1 if failed, otherwise returns ID #
int getFingerprintIDez() {
  uint8_t p = finger.getImage();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.image2Tz();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.fingerFastSearch();
  if (p != FINGERPRINT_OK)  return -1;

  // found a match!
  // Serial.print("Found ID #"); 
  Serial.print(finger.fingerID);
  // Serial.print(" with confidence of "); Serial.println(finger.confidence);
  return finger.fingerID;
}
