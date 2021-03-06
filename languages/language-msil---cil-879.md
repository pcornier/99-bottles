
## Language MSIL / CIL ##
---
- Author: cHao
- Date: 09/18/05
- Info: n/a
- Score:  (3.75 in 118 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-msil---cil-879.html
---

```// MSIL version of the "99 bottles" song
// by chao, 2005 sep 17

// Notes by cHao
//
// Many MSIL examples i've seen are just code spit out by a disassembler,
// or the result of telling a compiler to output MSIL.
// While that's fine if you're into the many annoying little syntactic
// details of the language, it won't show you how to use the features
// that the compiler doesn't provide.  It also won't show you exactly
// how much of the detail is actually required, and how much is just
// boilerplate code generated by the compiler.
//
// I felt the need to provide an example written from the ground up
// in MSIL.  No C# or VB compiler was used; in fact, they couldn't
// even produce the code in this file. 
//
// The end result is that there are no anal-retentive overuses
// of attributes, no unnecessary prototypes, and no code that doesn't
// absolutely have to be in a working program.  This is MSIL that
// acts like MSIL.  :)

// We now return you to our regularly scheduled program.





// ILASM is more than happy to assemble the code if this line is missing;
// however, .net won't be able to load the program.  Assemblies 
// (DLLs and EXEs) need manifests, or else they're pretty useless.
.assembly beer { }

// ILASM appears to already know about the mscorlib assembly (where a huge
// chunk of .net's class library lives).  But for the sake of
// correctness, let's include a reference to it.
.assembly extern mscorlib { }


// ILASM will happily work with code outside a class.  That's not CLS
// compliant, meaning C#/VB/etc won't be able to use the functions defined,
// but that usually matters only for assemblies designed to be used by
// other (HLL) programs--which is not the case here.  It doesn't make
// much difference here except in the functions' names and visibility,
// but i kept this code global in order to demonstrate what can be done
// with MSIL that can't be done with most CLS-compliant languages.
//
// If you want this code in a class, uncomment the .class line below, as
// well as the last line of this file (which should be suitably marked),
// and globally find and replace "/*beer::*/" with "beer::".
// (Even in your own class, you have to refer to things by their full names.)


// "public" means that other classes can see and use this class.
//.class public beer {

// Prints "{n} bottle(s)", then line_end, and then goes to the next line.
// The default access specifier is "private", which is exactly what we want
// (we should never let anyone sing one mangled line of our song).  :)
// "static" means this code belongs to the class or namespace as opposed to
// an object, and doesn't need--in fact, doesn't have--a "current object"
// to work with.
.method static void printLine(int32 n, string line_end)
{
           // This is the number of stack slots we intend to use.
           // If we use more, .net will throw an InvalidProgramException
           // (which means the code failed some format and/or sanity checks).
           .maxstack 3

           ldarg.0                         // push the first arg (n)
           dup                             // copy; brfalse.s eats a stack entry
           brfalse.s    no_more            // if n == 0, print "No more" instead

           // I'm not using StringBuilders or other fancy stuff -- just
           // doing a bunch of console writes.  This is sometimes slower,
           // but (1) the code has fewer moving parts, and (2) we're not
           // creating whole new objects in order to build strings we're
           // just going to output once and then throw away.  This code,
           // in fact, doesn't create any objects itself--which means it's
           // less likely to trigger the GC even if we have 2 billion bottles
           // of beer.  :)

  print_n:
           // MSIL and ILASM have no concept of "current namespace", so
           // everything must be referred to by its full name.
           // The name generally looks like
           //
           //    [AssemblyName]NamespaceName.Classname::MemberName(args) 
           //
           // but AssemblyName defaults to the current assembly, and
           // NamespaceName and ClassName default to nothing (ie: "global
           // namespace" and "global functions/variables/etc", respectively).
           // (The assembly's internal name can be found at the end of
           // each class's overview in the MSDN library, but a reasonable
           // first guess is the container DLL's name minus ".dll".)
           dup
           call         void [mscorlib]System.Console::Write(int32)
           br.s         bottles            // Skip over the "no more" part

  no_more: ldstr        "No more"
           call         void [mscorlib]System.Console::Write(string)

  bottles: ldstr        " bottle"
           call         void [mscorlib]System.Console::Write(string)
           ldc.i4.1
           beq.s        therest            // Skip printing the "s" if n == 1 

  print_s: ldstr        "s"
           call         void [mscorlib]System.Console::Write(string)

  therest: // print the rest of the line
           ldarg.1
           call         void [mscorlib]System.Console::WriteLine(string)
           ret
}


// This is the main function.  It doesn't have to be called "Main"; in fact,
// the runtime doesn't care at all about the name.  All that our function
// has to do is have the .entrypoint directive at the beginning of the code,
// and have one of a handful of signatures (which happens to include 
// "static void {name}()").  Access modifiers (private, public, ...) don't
// matter, but i added "public" in case someone wanted to make this a class.

.method public static void sing()
{
           .maxstack 3
           // Tell .net that this is where we want our program to start
           .entrypoint

           // Push our starting counter onto the stack
           ldc.i4.s     99

           // I use "dup" instead of a local, partly because i prefer it
           // when i'm thinking in stack mode. :)
           // Another reason, though, is that there are extra ldloc.0's
           // and stloc.0's involved in using a local variable.
           // Keeping the counter on the stack means less data shuffling
           // when code is structured to do it effectively.
           //
           // A nifty side effect is that it confuses every decompiler i've
           // tried, since the way we're using the stack can't easily be
           // duplicated in most .net HLLs.  It's still valid IL; it just
           // doesn't look like anything a decompiler is used to seeing.
           //
           // * Salamander is quite confounded by this function,
           //   and the code isn't even obfuscated.  :)
           // * Spices.net comes awfully close, but doesn't realize 99 is
           //   a counter and not a constant.  The code it spits out
           //   loops "while (99 - 1 != 0)" (ie: til 98 == 0).  Oops.  :)
           // * Dis# doesn't show that this function exists, even when
           //   it's in a class.
           // * Fox .net decompiler crashes.
           // * I got tired of decompiling my own code, so there ya go.
           //   Evidence.  :)
    loop:
           // first line: "X bottle(s) of beer on the wall"
           dup
           ldstr        " of beer on the wall"
           call         void /*beer::*/printLine(int32, string)

           // second line: "X bottle(s) of beer"
           dup
           ldstr        " of beer"
           call         void /*beer::*/printLine(int32, string)

           // Third line.  Everybody sing!
           ldstr        "Take one down, pass it around"
           call         void [mscorlib]System.Console::WriteLine(string)

           // Take one down.... :)   (stack effect: x -- x-1)
           ldc.i4.1
           sub

           // 4th line: "(X-1) bottle(s) of beer on the wall" 
           dup
           ldstr        " of beer on the wall"
           call         void /*beer::*/printLine(int32, string)

           // Now a blank line, so the output looks less jumbled
           call         void [mscorlib]System.Console::WriteLine()

           // if the counter != 0, go back for another beer.  :)
           dup
           brtrue.s     loop

           // At this point, the stack still contains the counter--which 
           // should be 0, but we don't really care about that.  We just need
           // to make sure that since we don't return a value, our little part
           // of the stack is clean before we leave.  (Another sanity check,
           // courtesy of .net.)
    exit:  pop
           ret
}

// } // uncomment me only if you uncommented the ".class" line way above```