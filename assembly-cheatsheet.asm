.global main
 
message:
    .asciz "output\n"
    .align 4
 
main:
    ldr r0, =message
    bl printf
 
    mov r7, #1
    swi 0
