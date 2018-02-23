
## Language FASM ##
---
- Author: Quiveror
- Date: 01/27/07
- Info: http
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fasm-1385.html
---

```; 99 bottles of beer by Quiveror
; x86-64 Windows console version

format PE64 console
entry start
section '.data' data readable writeable
    stdout dq ?
    a$ db '00 bottles'
    b$ db ' of beer'
    c$ db ' on the wall'
    d$ db ',',13,10,13,10
    e$ db 13,10,'Take one down, pass it around,',13,10
    f$ db 13,10,'Go to the store, buy some more,',13,10
    label h$
section '.code' code readable executable
fillnum:
    movzx eax,bl
    mov cl,10
    div cl
    add eax,'00'
    mov word [a$],ax
    xor esi,esi
    cmp bl,cl
    setb sil
    mov edi,esi
    cmp bl,2
    adc edi,0
    neg edi
    ret
write:
    push rbp
    mov rbp,rsp
    and rsp,not 0Fh
    push rax
    lea r9,[rsp]
    push 0
    mov r8d,edx
    mov rdx,rcx
    mov rcx,[stdout]
    sub rsp,8*4
    call [WriteFile]
    mov rsp,rbp
    pop rbp
    ret
write_0:
      lea edx,[b$-a$+edi]
      lea rcx,[a$+rsi]
    call write
    ret
write_1:
    call write_0
    mov [c$],' '
    mov [d$],'.'
      mov edx,e$-b$
      lea rcx,[b$]
    call write
write_2:
    call write_0
    mov [d$],','
      mov edx,e$-b$-2
      lea rcx,[b$]
    call write
    call write_0
    mov [c$],'.'
      mov edx,c$-b$+1
      lea rcx,[b$]
    call write
    ret
start:
    sub rsp,8
    mov ecx,-11
    call [GetStdHandle]
    mov [stdout],rax
    mov bl,99
    call fillnum
    call write_2
    jmp trivial 
next:
    call fillnum
    call write_1
trivial:
      mov edx,f$-e$
      lea rcx,[e$]
    call write
    dec bl
    jnz next
    mov word [a$],'No'
    xor edi,edi
    xor esi,esi
    call write_1
      mov edx,h$-f$
      lea rcx,[f$]
    call write
    mov word [a$],'99'
    mov [c$],' '
    mov [d$],'.'
      mov edx,d$-a$+3
      lea rcx,[a$]
    call write
    mov ecx,eax
    call [ExitProcess]
section '.idata' import data readable writeable
    dd 0,0,0,RVA kernel$,RVA kernel
    dd 0,0,0,0,0
    kernel$ db 'KERNEL32.DLL',0
    align 8
kernel:
    ExitProcess dq RVA ExitProcess$
    WriteFile dq RVA WriteFile$
    GetStdHandle dq RVA GetStdHandle$
    dq 0
    ExitProcess$ db 0,0,'ExitProcess',0
    align 2
    WriteFile$ db 0,0,'WriteFile',0
    align 2
    GetStdHandle$ db 0,0,'GetStdHandle',0```