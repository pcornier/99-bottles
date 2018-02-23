
## Language NQC ##
---
- Author: Dave Baum
- Date: 05/18/05
- Info: http
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nqc-661.html
---

```// 99 bottles of beer on the wall
// NQC version 0.1.0
// by Santiago Pereson <yaco@yaco.net>, Buenos Aires, Argentina
//
// NQC stands for 'Not Quite C', and is a programming language
// developed by Dave Baum <dfb@baumfamily.org> for the Lego
// Mindstorm series of programable bricks. more info at
// http://bricxcc.sourceforge.net/nqc/
//
// note: since the bricks can't 'print' anything, this program
//       just outputs the song as bytes via the IR transmitter.
//

int count = 99;

sub init_comm() {
  SetSerialComm(SERIAL_COMM_DEFAULT);
  SetSerialPacket(SERIAL_PACKET_DEFAULT);
}

sub bottles() {
  
  if (count == 0) {
    // 'no more'
    SetSerialData(0, 0x6e);
    SetSerialData(1, 0x6f);
    SetSerialData(2, 0x20);
    SetSerialData(3, 0x6d);
    SetSerialData(4, 0x6f);
    SetSerialData(5, 0x72);
    SetSerialData(6, 0x65);
    SendSerial(0, 7);
  } else {
    if (count < 10) {
      // 'N'
      SetSerialData(0, 0x30 + count);
      SendSerial(0, 1);
    } else {
      // 'NN'
      SetSerialData(0, 0x30 + (count / 10));
      SetSerialData(1, 0x30 + (count % 10));
      SendSerial(0, 2);
    }
  }
  
  // ' bottle'
  SetSerialData(0, 0x20);
  SetSerialData(1, 0x62);
  SetSerialData(2, 0x6f);
  SetSerialData(3, 0x74);
  SetSerialData(4, 0x74);
  SetSerialData(5, 0x6c);
  SetSerialData(6, 0x65);
  SendSerial(0, 7);
  
  // 's'
  if (count != 1) {
    SetSerialData(0, 0x73);
    SendSerial(0, 1);
  }
}

sub of_beer() {
  // ' of beer'
  SetSerialData(0, 0x20);
  SetSerialData(1, 0x6f);
  SetSerialData(2, 0x66);
  SetSerialData(3, 0x20);
  SetSerialData(4, 0x62);
  SetSerialData(5, 0x65);
  SetSerialData(6, 0x65);
  SetSerialData(7, 0x72);
  SendSerial(0, 8);
}

sub on_wall() {
  // ' on the wall'
  SetSerialData(0,  0x20);
  SetSerialData(1,  0x6f);
  SetSerialData(2,  0x6e);
  SetSerialData(3,  0x20);
  SetSerialData(4,  0x74);
  SetSerialData(5,  0x68);
  SetSerialData(6,  0x65);
  SetSerialData(8,  0x20);
  SetSerialData(9,  0x77);
  SetSerialData(10, 0x61);
  SetSerialData(11, 0x6c);
  SetSerialData(12, 0x6c);
  SendSerial(0, 13);
}

sub comma() {
  // ', '
  SetSerialData(0, 0x2c);
  SetSerialData(1, 0x20);
  SendSerial(0, 2);
}

sub take_one() {
  // ',\ntake one down, pass it around,\n'
  SetSerialData(0,  0x2c);
  SetSerialData(1,  0x0a);
  SetSerialData(2,  0x74);
  SetSerialData(3,  0x61);
  SetSerialData(4,  0x6b);
  SetSerialData(5,  0x65);
  SetSerialData(6,  0x20);
  SetSerialData(7,  0x6f);
  SetSerialData(8,  0x6e);
  SetSerialData(9,  0x65);
  SetSerialData(10, 0x20);
  SendSerial(0, 11);
  SetSerialData(0,  0x64);
  SetSerialData(1,  0x6f);
  SetSerialData(2,  0x77);
  SetSerialData(3,  0x6e);
  SetSerialData(4,  0x2c);
  SetSerialData(5,  0x20);
  SetSerialData(6,  0x70);
  SetSerialData(7,  0x61);
  SetSerialData(8,  0x73);
  SetSerialData(9,  0x73);
  SetSerialData(10, 0x20);
  SendSerial(0, 11);
  SetSerialData(0,  0x69);
  SetSerialData(1,  0x74);
  SetSerialData(2,  0x20);
  SetSerialData(3,  0x61);
  SetSerialData(4,  0x72);
  SetSerialData(5,  0x6f);
  SetSerialData(6,  0x75);
  SetSerialData(7,  0x6e);
  SetSerialData(8,  0x64);
  SetSerialData(9,  0x2c);
  SetSerialData(10, 0x0a);
  SendSerial(0, 11);
}

sub period() {
  // '.\n'
  SetSerialData(0, 0x2e);
  SetSerialData(11, 0x20);
  SendSerial(0, 2);
}

task main() {
  init_comm();
  while (count >= 0) {
    bottles();
    of_beer();
    on_wall();
    comma();
    bottles();
    of_beer();
    take_one();
    bottles();
    of_beer();
    on_wall();
    period();
  }
}```