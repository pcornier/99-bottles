
## Language Java ##
---
- Author: Tilo Dickopp
- Date: 05/23/06
- Info: n/a
- Score:  (3.02 in 531 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-java-1162.html
---

```public class BeerSongLoader extends ClassLoader {
  private static final String BEER_SONG =
	  
    " #�$%MBVC?*9@QW68Q986@9                                                                   " +
    " @6######%�##%@#9##��##�9                                                                 " +
    "   #C##�@#9#   ##$##�9#?#                                                                 " +
    "   #�Q#?##�W    #?##�6#9#                                                                 " +
    "   #�8##$##9    ###$##$�#         ?##$$#?##           $%#?##$M#?         ##$B#?#  #$V#?#  " +
    "   #$C#?##$?    #9###$##       $*#C##$9#9##$@       ##$Q#9##$W##$6   #C##$8#�### V%QV*V6V " +
    "   *CM%6#�###%$?$*BV#�#       ##MM%V8   VMVB#�#   ##?CMV8B  %CMC$V*  V6VC#�##�M$?$*MQV9V� " +
    "   CVV�$8VQV�V6VC$8B%CMC$    V*V6VC%    @#Q##�B  ##�V#�##    �CV9V�C   VV�$8VQV�V6VC$8B%C " +
    "   MC$V*V6VCM$CBV*VQVMVBC$  #�##%WC@%#$QV%V?V8V* V%VB$Q%#$%V6V8$#VWV   8C$VB$#V$  V8CMCM  " +
    "   VQVBC%CQ%     �$%%�$#V$V 8CMCMVQVBCQ%�%QC@%#  CW$#V$V8CMCMVQVBC%C   W$#V8VV$#          " +
    "   V$VBVBC$#     �###�V6#�# ##�M6#C##            %##Q##%�              ##%$#Q##           " +
    "   %%##%M#�#     ##6$#V8V6$  #CMV?VB$#           CCV�VQVQ$             Q$##�###$          " +
    "  $6#9#�##$WC   @%#$QV%V?V    8V*V%VB$Q%#$%MCV8   $#CMV8$#CMV?VB$#C%   CMV8C$VB$          " +
    "  #V�V6VM$#V$CBC*$#C%V8VWV      B$#VWV8C$VB#�##$    VCQ%#%QBMV�V@VB$  #V8V6VB$#VMV8C      " +
    " CV6$#V�V6VM$#C#V�C%C%$#          V*CM$#V�C$V         8CBV6VMCW$Q$    ##�###$C@%##�#      " +
    "                                                                                          " +
    " ##$C@%�#�###8$#V8V6$#C                                                                   " +
    " MV?VB$#CCV�VQVQ$6#9#9#Q#                                                                 " +
    "   #�?##�*#�   ##�#V9V�CV                                                                 " +
    "   V�$8VQV�V    6VC$8M8V$                                                                 " +
    "   V9VBV%CM#    C##%B#Q##         %V##%C#C#           #%?#Q##%*#         #%9#�##  #?M$VB  " +
    "   VBC$B%V8V    6VC#�##�       #V9V�CVV�$8VQV       �V6VC$8B%CMC$V   *V6VC#�###C C$VBC#VQ " +
    "   V�V%VB#�##MM$?MQV9V�       CVV�$8V   QV�V6VC   $8M%V?V�  C$B%VBC  �CBVBV6V%VB%@MQV9V�C " +
    "   VV�$8VQV�V6VC$8M%V?V�C    $B%VBC�    CBVBV6V  %VB%@$*M    QV9V�CV   V�$8VQV�V6VC$8B%CM " +
    "   C$V*V6VC%@#�###VV�C#C#V  BV6VM#�##$W$?MQV9V�C VV�$8VQV�V6VC$8B%CM   C$V*V6VC%  @$*MQV  " +
    "   9V�CVV�$8     VQV�V6VC$8 B%CMC$V*V6VCM$CBV*V  QVMVBC$%@#�##��V9V�   CVV�$8VQV          " +
    "   �V6VC$8M*     V6CMVBVCVB C$#�###CC            VV�VQCBV              BM8VV#�#           " +
    "   #�V$?M*$*     MQV9V�CVV�  $8VQV�V6V           C$8M*V6CM             VBVCVBC$%          " +
    "  @#�##�CV9V�   CVV�$8CMVB    C?CM$8MWVBC%C%V�V   CVBMVV8C$VWV�CM#�#   ##VVVV8C$          " +
    "  VWV�CM#�##%*$?MQV9V�CVV�      $8VQV�V6VC$8B%CM    C$V*V6VC%@B@MQV9  V�CVV�$8VQV�V6      " +
    " VC$8M8V$V9VBV%CM%@$*MQV          9V�CVV�$8VQ         V�V6VC$8B%CM    C$V*V6VC%@##$�      " +
    "                                                                                          " +
    " ##�M##��###########$##                                                                   " +
    " #�##�B##�V###�##�C######                                                                 " +
    "   ��###�###   �#######B$                                                                 " +
    "   9@C###�@�    #########                                                                 " +
    "   ##�##�?##    �*###�##�         C######?V           ###C###M##         ####C9@  @###$B  " +
    "   *@C###%MQ    �#V%%W�Q       *@##V*�$#MM6$@       @@###$B*@C###%   $W�$#B�$#V@ V###C@V# " +
    "   ##?�$#*@V###?$W@V###       ?�$#9@V   ###?�$#   @@V###?�  $#Q@V##  #?$W�$#W�$#6@V###C@V " +
    "   ###?�$#8@V###?@V##�##B    @W##��B    *#%�Q@?  ##�$B%B*    #M�Q�#V   %V#�#VMC#@?##�$B%@ " +
    "   ?##�%@V###?BC?M#$889C88  **$@@V##�#@######### ####C�$*M�QCC@@#V*?   M%V*Q9?C%  B�Q%CM  " +
    "   @C9V@Q8C$     *@6#M9B�%6 %@Q*�B6#C?CQ?*9WQ%9  9QVC#89B�#*6CQ%#*B�   V?9$9QMV�          " +
    "   M@Q@V6V88     8V9�@W96M$ �??V8M@C%            %**MQ@�*              $�VC%$@*           " +
    "   C�8?M98QC     #M$9W%$6B9  VV$$�WCMQ           $%#W8�#QB             ?W8C?$W9@          " +
    "  96C9@V?%$*6   89BVWV@W8@    VM$M#CC8V$@M$6M*%   V#$MC6W#�%%%*8#CM@   M*B@%9$W?          " +
    "  $9$99M$?*8B$VM8CC�CW6W@*      %W%CC?@#�?B8@W%9    ?*%$9B%8Q*�BQ$Q9  6@V9#?V98C$M$M      " +
    " M@%??C88M$86M$QV�WC?B?V          Q%�B8�#%?MQ         B6�BM?B9@#$%    WQMW?BBBB?#��6      ";

  @Override public Class<?> loadClass(String name) throws ClassNotFoundException {
    String alphabet = "";
    byte[] code = new byte[946];
    int i = 0, j = 0;
    boolean firstNibble = false;
    while (i < 946) {
      while (BEER_SONG.charAt(j) == ' ') j++;
      if (alphabet.length() < 16)
        alphabet += BEER_SONG.charAt(j++);
      else if (firstNibble = !firstNibble)
        code[i] = (byte)(alphabet.indexOf(BEER_SONG.charAt(j++)) * 16);
      else
        code[i++] += alphabet.indexOf(BEER_SONG.charAt(j++));
    }
    return name.equals("BeerSong") ? defineClass(name, code, 0, 946) 
                                   : findSystemClass(name);
  }

  public static void main(String[] args) throws Throwable {
    Class<?> beerSong = new BeerSongLoader().loadClass("BeerSong");
    System.out.println(beerSong.newInstance());
  }
}```