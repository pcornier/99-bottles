
## Language MSIL ##
---
- Author: Matthias Tessmann
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-msil-413.html
---

```// MSIL = Microsoft Intermediate Language
//      = CLI Assembler
// By Matthias Tessmann, 22. May 2002


///// Begin
.assembly extern mscorlib {}

// Required Assembly manifest
.assembly '99Bottles' {}
.module '99Bottles.exe'

// Be Object Orientated :-)
.namespace _99Bottles {
  .class private auto ansi beforefieldinit Beer
         extends [mscorlib]System.Object {}
}

// Implement main bottle method
.namespace _99Bottles {
  .class private auto ansi beforefieldinit Beer extends
[mscorlib]System.Object {
    .method private hidebysig static void Main(string[] args) cil managed {

      .entrypoint
      .maxstack 4

      // Setup local vars
      .locals init (int32, string, string, string, string)

      	        ldc.i4.s   99
      	        stloc.0
      		ldstr " bottles of beer on the Wall"
		stloc.1
		ldstr " bottle of beer on the Wall"
		stloc.2
		ldstr " bottles of beer..."
		stloc.3
		ldstr " bottle of beer..."
		stloc 4
      	        br         End

      Run:      ldstr      "{0} "
       		ldloc.0
       		ldc.i4.1
       		bne.un.s  MoreBottles  // have more than one bottle left


       		ldloc.2    // else
       		br.s       Concat

      MoreBottles:
      		ldloc.1
      Concat:
      	        call       string [mscorlib]System.String::Concat(string,string)
      		ldloc.0
      	        box        [mscorlib]System.Int32
      	        call       void [mscorlib]System.Console::WriteLine(string,object)

       		ldstr      "{0} "
       		ldloc.0
       		ldc.i4.1
       		bne.un.s   MoreBottles2 // more than one bottle left

      		ldloc 4	   // else
       		br.s       Concat2

      MoreBottles2:
      		ldloc.3
      Concat2:
		call       string [mscorlib]System.String::Concat(string, string)
       		ldloc.0
       		box        [mscorlib]System.Int32
       		call       void [mscorlib]System.Console::WriteLine(string, object)

       		ldstr      "Take one down, pass it around,"
       		call       void [mscorlib]System.Console::WriteLine(string)
       		ldstr      "{0} "
       		ldloc.0
       		ldc.i4.1
       		sub
       	        dup
       		stloc.0

		dup
		ldc.i4.0
		beq.s End2

       		ldc.i4.1
       		bne.un.s   MoreBottles3

        	ldloc.2
                br.s       Concat3

      MoreBottles3:
     		ldloc.1
      Concat3:
      	        call       string [mscorlib]System.String::Concat(string,string)

      	        ldloc.0
                box        [mscorlib]System.Int32
                call       void [mscorlib]System.Console::WriteLine(string,object)
                ldstr      ""
                call       void [mscorlib]System.Console::WriteLine(string)
      End:
      		ldloc.0
                ldc.i4.0
      	        bgt        Run

		ldstr 	  "No more bottles of beer on the wall!"
		call      void [mscorlib]System.Console::WriteLine(string)
		ret
      End2:     //Clean the stack
      		pop
		pop
		br End

    }

  }
}

// End```