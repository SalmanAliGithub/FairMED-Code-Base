void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {
  String cmd;
  cmd = Serial.readStringUntil('\r');

  if (cmd == "on") {
    digitalWrite(LED_BUILTIN, HIGH);
    Serial.println("On");
  }
  else if (cmd == "off") {
    digitalWrite(LED_BUILTIN, LOW);
    Serial.println("Off");
  }

}
