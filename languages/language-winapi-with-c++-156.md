
## Language WinAPI with C++ ##
---
- Author: Daniel Hilgarth
- Date: 04/20/05
- Info: n/a
- Score:  (2.32 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-winapi-with-c++-156.html
---

```//99 Bottles of Beer by Daniel Hilgarth aka dEUs with the WinAPI
#include <windows.h>
#include <string>
using namespace std;

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR 
szCmdLine, int iCmdShow)
{
     MSG         msg;
     HWND        hWnd;
     WNDCLASS    wc;

     const char  szAppName[] = "99 Bottles of Beer";

     wc.cbClsExtra           = 0;
     wc.cbWndExtra           = 0;
     wc.hbrBackground        = (HBRUSH) GetStockObject(WHITE_BRUSH);
     wc.hCursor              = LoadCursor(NULL, IDC_ARROW);
     wc.hIcon                = LoadIcon(NULL, IDI_APPLICATION);
     wc.hInstance            = hInstance;
     wc.lpfnWndProc          = WndProc;
     wc.lpszClassName        = szAppName;
     wc.lpszMenuName         = NULL;
     wc.style                = CS_HREDRAW | CS_VREDRAW;

     RegisterClass(&wc);

     hWnd = CreateWindow(    szAppName,
                             szAppName,
                             WS_OVERLAPPED | WS_SYSMENU,
                             CW_USEDEFAULT,
                             CW_USEDEFAULT,
                             300,
                             470,
                             NULL,
                             NULL,
                             hInstance,
                             NULL);

     ShowWindow(hWnd, iCmdShow);
     UpdateWindow(hWnd);

     while (GetMessage(&msg, NULL, 0, 0))
     {
         TranslateMessage(&msg);
         DispatchMessage(&msg);
     }

     return msg.wParam;
}

LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
     static HWND        hButton;
     static HWND        hEdit;

     switch (message)
     {
         case WM_CREATE:
         {
             hButton = CreateWindowEx(BS_PUSHBUTTON,
                                   "button",
                                   "Start",
                                   WS_CHILD | WS_VISIBLE,
                                   0,0,0,0,
                                   hWnd,
                                   NULL,
                                   ((LPCREATESTRUCT) lParam) -> hInstance,
                                   NULL);
             hEdit = CreateWindowEx(WS_EX_CLIENTEDGE,
                                    "edit",
                                    "",
                                    WS_CHILD | WS_VISIBLE | ES_AUTOVSCROLL 
| WS_VSCROLL | ES_MULTILINE,
                                    0, 0, 0, 0,
                                    hWnd,
                                    NULL,
                                    ((LPCREATESTRUCT) lParam) -> hInstance,
                                    NULL);
             int FontSize=-11;
             char FontName[]="Tahoma";
             HFONT MyFont = CreateFont(FontSize, 0, 0, 0, 0, 0, 0, 0, 
ANSI_CHARSET,
             OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
             DEFAULT_PITCH, FontName);
             if (MyFont != 0)
             {
                 SendMessage(hEdit, WM_SETFONT, int(MyFont), true);
                 SendMessage(hButton, WM_SETFONT, int(MyFont), true);
             }
             return 0;
         }
         case WM_SIZE:
         {
             MoveWindow(hButton, LOWORD(lParam) / 2 - 80, 
HIWORD(lParam)-40, 160, 30, TRUE);
             MoveWindow(hEdit, 10, 10, LOWORD(lParam)-20, 
HIWORD(lParam)-60, TRUE);
             return 0;
         }
         case WM_COMMAND:
         {
             if (lParam == (LPARAM)hButton)
             {
                 if (HIWORD(wParam) == BN_CLICKED)
                 {
                     string strBottles;
                     for(int i=99;i>0;--i)
                     {
                         char chTmp[200]="";
                         char chPlural[2]="s";
                         if(i==1)
                             chPlural[0]=0;
                         sprintf(chTmp,"%d bottle%s of beer on the 
wall,\r\n%d bottle%s of beer."
                             "Take one down, pass it 
around,\r\n",i,chPlural,i,chPlural);
                         if(i==1)
                             strcat(chTmp,"No more bottles on the wall.");
                         else
                             sprintf(chTmp,"%s%d bottle%s of beer on the 
wall.\r\n",chTmp,i-1,i==2?"":"s");
                         strBottles+=chTmp;
                     }
                     SetWindowText(hEdit,strBottles.c_str());
                 }
             }
             return 0;
         }
         case WM_DESTROY:
         {
             PostQuitMessage(0);
             return 0;
         }
     }
     return DefWindowProc(hWnd, message, wParam, lParam);
}```