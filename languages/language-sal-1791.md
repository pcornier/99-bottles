
## Language SAL ##
---
- Author: bbfh
- Date: 05/28/08
- Info: n/a
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sal-1791.html
---

```Application description: Lyrics of the song 99 Bottles of Beer
  Libraries
  Global Declarations
    Window Defaults
    Formats
    External Functions
    Constants
      System
      User
        String: CRLF	= '
        '
    Resources
    Variables
    Internal Functions
      Function: gfBottle
        Description:
        Returns
          String:
        Parameters
          Number: p_nCount
        Static Variables
        Local variables
        Actions
          If p_nCount >= 1
            Return SalNumberToStrX( p_nCount, 0 ) || ' bottle' || SalStrRepeatX( 's', SalNumberMin(
1, p_nCount - 1 ) )
          Else
            Return 'no more bottles'
      Function: gfVerse
        Description:
        Returns
          String:
        Parameters
          Number: p_nID
        Static Variables
        Local variables
          String: sVerse
        Actions
          Set sVerse	= gfBottle( p_nID ) || ' of beer on the wall, ' || gfBottle( p_nID ) || ' of
beer.' || CRLF
          !
          If p_nID = 0
            Return 'N' || SalStrRightX( sVerse, SalStrLength( sVerse ) - 1 ) || 'Go to the store and
buy some more, 99 bottles of beer on the wall.'
          Else
            Return sVerse || 'Take one down and pass it around, ' || gfBottle( p_nID - 1 ) || ' of
beer on the wall.' || CRLF || CRLF
      Function: gf99BottlesOfBear
        Description:
        Returns
        Parameters
        Static Variables
        Local variables
          Number: nCount
          String: sSong
        Actions
          Set nCount	= 99
          !
          While nCount >= 0
            Set sSong	= sSong || gfVerse( nCount )
            Set nCount	= nCount - 1
          !
          Call SalMessageBox( sSong, '', 0 )
    Named Menus
    Class Definitions
    Application Actions
      On SAM_AppStartup
        Call gf99BottlesOfBear( )```