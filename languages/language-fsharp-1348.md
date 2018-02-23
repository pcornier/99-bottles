
## Language F# ##
---
- Author: Don Syme
- Date: 12/07/06
- Info: http
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fsharp-1348.html
---

```#light

open System
open System.Text
open System.Drawing
open System.Windows.Forms

let theBottleSong =
   let strSong = new StringBuilder()
   let append (s:string) = strSong.Append(s) |> ignore
   for i = 99 downto 0 do
      if (i = 0) then
         append("\nNo more bottles of beer on the wall, no more bottles of beer." +
                "\nGo to the store and buy some more, 99 bottles of beer on the wall.")
      else 
         let x = i - 1
         let plural = if (i = 1) then "" else "s"

         append (sprintf "\n%d bottle%s of beer on the wall, %d bottle%s" i plural i plural);
         append "\nTake one down and pass it around, ";

         match x with 
         | 1 -> append "1 bottle "
         | 0 -> append " no more bottles "
         | _ -> append (sprintf "%d bottles of beer on the wall.\n" x)

   strSong.ToString()
    
let form = new Form(Width=500, Height=420, 
                    Visible=true, TopMost=true, 
                    FormBorderStyle=FormBorderStyle.FixedSingle, 
                    Text="99 bottles of beer presented in F#")

let textBox = new RichTextBox(Size=new Size(480, 350), 
                              Location=new Point(5, 5),
                              Text=theBottleSong)
form.Controls.Add(textBox)

let btnClose = new Button(Location=new Point(408, 360), Text="Close")
btnClose.Click.Add (fun _ -> form.Close())
form.Controls.Add(btnClose)

[<STAThread>]
do Application.Run(form)```