                         #PROJECT_1
                       #Caeser_Cipher
                    #ManishKumarAkela 226301127
                    
#TASK_1: FUNCTION_TO_ENCRIPT_THE_TEXT

def EncriptText(text, n):
    
    #txt->THE_TEXT_THAT_TO_ENCRIPTED
    #n->NUMBER_OF_SHIFT
    
    ans=""
    #EncriptText_STORES_IN_ans_VARIABLE
    
    # iterate over the given text
    for char in text:
        # check if space is there then simply add space
        if char==" ":
            ans+=" "
            
        # check if a character is uppercase then encrypt it accordingly
        elif (char.isupper()):
            e = (ord(char)+n-65) %26 +65
            ans+=chr(e)
            
        # check if a character is lowercase then encrypt it accordingly
        else:
            e=(ord(char)+n-97) %26 +97
            ans+=chr(e)
            
    #return_the_encripted_text
    return ans 



############################################################################################



#TASK_2: FUNCTION_TO_DECRIPT_THE_TEXT

def DecriptText(Ciphertext, n):
    
    #Ciphertext->THE_TEXT_THAT_TO_DECRIPTED
    #n->NUMBER_OF_SHIFT
    
    ans=""
    #Decripted_Text_STORES_IN_ans_VARIABLE
    
    # iterate over the given Ciphertext
    for char in Ciphertext:
        # check if space is there then simply add space
        if char==" ":
            ans+=" "
            
        # check if a character is uppercase then Decrypt it accordingly
        elif (char.isupper()):
            e = (ord(char)-n-65) %26 +65
            ans+=chr(e)
            
        # check if a character is lowercase then Decrypt it accordingly
        else:
            e=(ord(char)-n-97) %26 +97
            ans+=chr(e)
            
    #return_the_Decripted_text
    return ans 


##############################################################################################


#TASK_3:Guessing_The_Key:
           
        #Part_1
        
def KeyFinder(CipherText , PlainText):
    
    #if_poistive_number_is_returned_means_RIGHT_Shift
    #else_LEFT_Shift
    return ord(CipherText[0])-ord(PlainText[0])


        #Part_2
        
def brute_force_cc(message):
    Letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    # loop to run all 26 keys from 0 to 25
    for key in range(len(Letters)):
        
        # initialize a blank string which will hold the translated string
        translated=""
        
        # loop for every character in the cipher_text
        for ch in message:
            if ch in Letters:
                ind=Letters.find(ch)
                ind-=key
                translated+=Letters[ind]
            
            else:
                translated+=ch
        
        print('Hacking key is %s: %s' % (key, translated))
        

#____________________END_____________________________________________________________________________________________
#__________________@ManishKumarAkela_________________________________________________________________________________





