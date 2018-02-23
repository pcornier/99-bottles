
## Language CLARION ##
---
- Author: Ahmed
- Date: 07/01/06
- Info: http
- Score:  (2.58 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clarion-1202.html
---

```Main PROCEDURE                                        !Generated from procedure template - Window

! Start of "Data for the procedure"
! [Priority 1300]

! Window Structure
Window               WINDOW('Caption'),AT(,,260,100),GRAY
                       STRING('Hello Word'),AT(16,23,222,10),USE(?String1),CENTER
                     END

! [Priority 7500]

! End of "Data for the procedure"
ThisWindow           CLASS(WindowManager)
Ask                    PROCEDURE(),DERIVED
Init                   PROCEDURE(),BYTE,PROC,DERIVED
Kill                   PROCEDURE(),BYTE,PROC,DERIVED
Open                   PROCEDURE(),DERIVED
PrimeFields            PROCEDURE(),PROC,DERIVED
PrimeUpdate            PROCEDURE(),BYTE,PROC,DERIVED
Reset                  PROCEDURE(BYTE Force=0),DERIVED
RestoreField           PROCEDURE(SIGNED Control),DERIVED
Run                    PROCEDURE(),BYTE,PROC,DERIVED
Run                    PROCEDURE(USHORT Number,BYTE Request),BYTE,PROC,DERIVED
SetAlerts              PROCEDURE(),DERIVED
SetResponse            PROCEDURE(BYTE Response),DERIVED
TakeAccepted           PROCEDURE(),BYTE,PROC,DERIVED
TakeCloseEvent         PROCEDURE(),BYTE,PROC,DERIVED
TakeCompleted          PROCEDURE(),BYTE,PROC,DERIVED
TakeEvent              PROCEDURE(),BYTE,PROC,DERIVED
TakeFieldEvent         PROCEDURE(),BYTE,PROC,DERIVED
TakeNewSelection       PROCEDURE(),BYTE,PROC,DERIVED
TakeRejected           PROCEDURE(),BYTE,PROC,DERIVED
TakeSelected           PROCEDURE(),BYTE,PROC,DERIVED
TakeWindowEvent        PROCEDURE(),BYTE,PROC,DERIVED
Update                 PROCEDURE(),DERIVED
                     END

Toolbar              CLASS(ToolbarClass)
DisplayButtons         PROCEDURE(),DERIVED
Init                   PROCEDURE()
Kill                   PROCEDURE(),DERIVED
TakeEvent              PROCEDURE(<*LONG VCR>,WindowManager WM),DERIVED
                     END

! Start of "Local Data After Object Declarations"
! [Priority 5000]

! End of "Local Data After Object Declarations"

  CODE
  GlobalResponse = ThisWindow.Run()

! Start of "Procedure Routines"
! [Priority 5000]

! End of "Procedure Routines"

ThisWindow.Ask PROCEDURE

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 500]

  ! Parent Call
  PARENT.Ask
  ! [Priority 6300]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.Init PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 300]

  ! Enter procedure scope
  GlobalErrors.SetProcedureName('Main')
  ! [Priority 2700]

  ! Snap-shot GlobalRequest
  SELF.Request = GlobalRequest
  ! [Priority 4950]

  ! Parent Call
  ReturnValue = PARENT.Init()
  ! [Priority 5050]

  ! Set options from global values
  IF ReturnValue THEN RETURN ReturnValue.
  SELF.FirstField = ?String1
  SELF.VCRRequest &= VCRRequest
  SELF.Errors &= GlobalErrors
  ! [Priority 5600]

  ! Setup Toolbar Object
  SELF.AddItem(Toolbar)
  ! Initialize the procedure
  CLEAR(GlobalRequest)
  CLEAR(GlobalResponse)
  ! [Priority 6500]

  ! Procedure setup standard formulas
  ! [Priority 7300]

  ! Open Files
  ! [Priority 7800]

  ! Open the window
  OPEN(Window)
  SELF.Opened=True
  ! [Priority 8030]

  ! Restore from INI file
  ! [Priority 8400]

  ! Process field templates
  ! [Priority 8800]

  ! Prepare Alert Keys
  SELF.SetAlerts()
  ! [Priority 9500]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.Kill PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.Kill()
  ! [Priority 5050]

  ! Short-stop if kill called already
  IF ReturnValue THEN RETURN ReturnValue.
  IF SELF.FilesOpened
  ! [Priority 5600]

  ! Call Close file methods
  ! [Priority 6500]

  END
  ! [Priority 7300]

  ! Save window information
  ! [Priority 8500]

  ! Leave procedure scope
  GlobalErrors.SetProcedureName
  ! [Priority 9800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.Open PROCEDURE

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 500]

  ! Parent Call
  PARENT.Open
  ! [Priority 6300]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.PrimeFields PROCEDURE

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.PrimeFields
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.PrimeUpdate PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.PrimeUpdate()
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.Reset PROCEDURE(BYTE Force=0)

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 500]

  ! Short-stop in AcceptAll case
  SELF.ForcedReset += Force
  IF Window{Prop:AcceptAll} THEN RETURN.
  ! [Priority 1500]

  ! Standard Formulas
  ! [Priority 2500]

  ! Secondary Lookups
  ! [Priority 3500]

  ! Parent Call
  PARENT.Reset(Force)
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.RestoreField PROCEDURE(SIGNED Control)

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.RestoreField(Control)
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.Run PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.Run()
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.Run PROCEDURE(USHORT Number,BYTE Request)

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.Run(Number,Request)
  ! [Priority 6000]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.SetAlerts PROCEDURE

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.SetAlerts
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.SetResponse PROCEDURE(BYTE Response)

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  ! Parent Call
  PARENT.SetResponse(Response)
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"


ThisWindow.TakeAccepted PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  ! Top of CYCLE/BREAK support
  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 2800]

  ! CASE ACCEPTED()
    CASE ACCEPTED()
  ! [Priority 3030]

  ! ELSE Clause
    ELSE
  ! [Priority 3080]

    END
  ! [Priority 4100]

  ! Parent Call
  ReturnValue = PARENT.TakeAccepted()
  ! [Priority 6300]

    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeCloseEvent PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.TakeCloseEvent()
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeCompleted PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  ReturnValue = PARENT.TakeCompleted()
  ! [Priority 7500]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeEvent PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  ! Top of CYCLE/BREAK support
  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 3800]

  ! Parent Call
  ReturnValue = PARENT.TakeEvent()
  ! [Priority 6300]

  ! Bottom of CYCLE/BREAK support
    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeFieldEvent PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 2800]

  CASE FIELD()
  ! [Priority 3050]

  OF ?String1
    ! Start of "Control Handling"
    ! [Priority 500]

    CASE EVENT()
    ! [Priority 1800]

    ELSE
    ! [Priority 2800]

    END
    ! [Priority 4000]

    ! Generated Code
    ! End of "Control Handling"
  END
  ! [Priority 4100]

  ! Parent Call
  ReturnValue = PARENT.TakeFieldEvent()
  ! [Priority 5500]

  CASE FIELD()
  ! [Priority 6050]

  OF ?String1
    ! Start of "Control Handling"
    ! [Priority 5500]

    CASE EVENT()
    ! [Priority 6800]

    ELSE
    ! [Priority 7800]

    END
    ! [Priority 9000]

    ! End of "Control Handling"
  ! [Priority 6150]

  END
  ! [Priority 6900]

    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeNewSelection PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 2800]

  ! Parent Call
  ReturnValue = PARENT.TakeNewSelection()
  ! [Priority 6300]

    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeRejected PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 2800]

  ! Parent Call
  ReturnValue = PARENT.TakeRejected()
  ! [Priority 6300]

    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeSelected PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
  ! [Priority 2800]

  ! Parent Call
  ReturnValue = PARENT.TakeSelected()
  ! [Priority 6300]

    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.TakeWindowEvent PROCEDURE

ReturnValue          BYTE,AUTO

! Start of "WindowManager Method Data Section"
! [Priority 3500]

Looped BYTE
! [Priority 8500]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 1300]

  ! Top of CYCLE/BREAK support
  LOOP
    IF Looped
      RETURN Level:Notify
    ELSE
      Looped = 1
    END
    CASE EVENT()
  ! [Priority 2800]

  ! Handlers for each event
    OF EVENT:AlertKey
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:PreAlertKey
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:CloseWindow
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:CloseDown
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:OpenWindow
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:LoseFocus
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:GainFocus
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:Suspend
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    OF EVENT:Resume
      ! Start of "Window Event Handling"
      ! [Priority 2500]

      ! Generated Code
      ! End of "Window Event Handling"
    END
  ! [Priority 4000]

  ! Parent Call
  ReturnValue = PARENT.TakeWindowEvent()
  ! [Priority 6300]

  ! CASE EVENT()
    CASE EVENT()
    OF EVENT:AlertKey
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:PreAlertKey
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:CloseWindow
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:CloseDown
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:OpenWindow
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:LoseFocus
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:GainFocus
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:Suspend
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
    OF EVENT:Resume
      ! Start of "Window Event Handling"
      ! [Priority 7500]

      ! End of "Window Event Handling"
  ! [Priority 7530]

  ! ELSE Clause
    ELSE
  ! [Priority 7580]

    END
  ! [Priority 7800]

  ! Bottom of CYCLE/BREAK support
    RETURN ReturnValue
  END
  ReturnValue = Level:Fatal
  ! [Priority 9000]

  ! End of "WindowManager Method Executable Code Section"
  RETURN ReturnValue


ThisWindow.Update PROCEDURE

! Start of "WindowManager Method Data Section"
! [Priority 5000]

! End of "WindowManager Method Data Section"
  CODE
  ! Start of "WindowManager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.Update
  ! [Priority 6300]

  ! Secondary Lookups
  ! [Priority 8800]

  ! End of "WindowManager Method Executable Code Section"


Toolbar.DisplayButtons PROCEDURE

! Start of "Toolbar Manager Method Data Section"
! [Priority 5000]

! End of "Toolbar Manager Method Data Section"
  CODE
  ! Start of "Toolbar Manager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.DisplayButtons
  ! [Priority 7500]

  ! End of "Toolbar Manager Method Executable Code Section"


Toolbar.Init PROCEDURE

! Start of "Toolbar Manager Method Data Section"
! [Priority 5000]

! End of "Toolbar Manager Method Data Section"
  CODE
  ! Start of "Toolbar Manager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.Init
  ! [Priority 7500]

  ! End of "Toolbar Manager Method Executable Code Section"


Toolbar.Kill PROCEDURE

! Start of "Toolbar Manager Method Data Section"
! [Priority 5000]

! End of "Toolbar Manager Method Data Section"
  CODE
  ! Start of "Toolbar Manager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.Kill
  ! [Priority 7500]

  ! End of "Toolbar Manager Method Executable Code Section"


Toolbar.TakeEvent PROCEDURE(<*LONG VCR>,WindowManager WM)

! Start of "Toolbar Manager Method Data Section"
! [Priority 5000]

! End of "Toolbar Manager Method Data Section"
  CODE
  ! Start of "Toolbar Manager Method Executable Code Section"
  ! [Priority 2500]

  ! Parent Call
  PARENT.TakeEvent(VCR,WM)
  ! [Priority 7500]

  ! End of "Toolbar Manager Method Executable Code Section"

! Start of "Local Procedures"
! [Priority 5000]

! End of "Local Procedures"```