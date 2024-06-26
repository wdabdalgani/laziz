function displayText() {
        let date_pre = document.getElementById('date_pre').value;
        let R_P = document.getElementById('R_P').value;
        let R_G = document.getElementById('R_G').value;
        let JC_p = document.getElementById('JC_p').value;
        let JC_G = document.getElementById('JC_G').value;
        let JM_P = document.getElementById('JM_P').value;
        let JM_G = document.getElementById('JM_G').value;
        let Dembi_p = document.getElementById('Dembi_p').value;
        let Dembi_G = document.getElementById('Dembi_G').value;
        let B_p = document.getElementById('B_p').value;
        let B_G = document.getElementById('B_G').value;
        
        //******* Rnede 40 *********************************************** */
         let R_c = document.getElementById('r_s').innerText = R_P;
        let a = document.getElementById('r_s_T').innerText = (R_P * 40);
        let R_big_t = document.getElementById('r_big').innerText = R_G;
        let b  = document.getElementById('r_big_T').innerText = (R_G * 80);
        let T_4 = document.getElementById('r_big_To').innerText = ( a + b);
        //****************************************************** */

        //******* Jassi Choura   *********************************************** */
        let JC_C =  document.getElementById('Jassi_Choure_count').innerHTML = JC_p;
        let jc_p_prix = document.getElementById('Jassi_Choure_prixs').innerHTML = (JC_p * 40);
        let jc_big_t =document.getElementById('Jassi_Choure_count_for_big').innerHTML = JC_G;
        let jc_G_prix =  document.getElementById('Jassi_Choure_Prixs_for_big').innerHTML = (JC_G * 80);
        let T_3 = document.getElementById('Jassi_choure_total').innerHTML = (jc_p_prix + jc_G_prix);
        //***********   Jassi Mht  ******************************************* */
     

        let JM_C = document.getElementById('Jassi_Mht_count').innerHTML = JM_P;
        let jM_p_prix = document.getElementById('Jassi_Mht_prixs').innerHTML = ( JM_P * 40); 
        let jm_big_t =document.getElementById('Jassi_Mht_conut_for_big').innerHTML =   JM_G;
        let jM_G_prix = document.getElementById('Jassi_Mht_prixs_for_big').innerHTML = ( JM_G * 80); 
        let T_2 =  document.getElementById('Jassi_Mht_total').innerHTML = (jM_p_prix +  jM_G_prix);
       
        //****************************************************** */ 
          //***********    Dembi  ******************************************* */
     

          let D_C = document.getElementById('Dembi_count').innerHTML = Dembi_p;
          var c = document.getElementById('Dembi_prix').innerHTML = ( Dembi_p * 40); 
          let dembi_big_t = document.getElementById('Dembi_big_count').innerHTML =   Dembi_G;
          var d = document.getElementById('Dembi_big_prix').innerHTML = ( Dembi_G * 80); 
          let T_1 = document.getElementById('Dembi').innerHTML = (c + d);
         
          //****************************************************** */ 
             //***********    bokassa  ******************************************* */
     

             let bokassa = document.getElementById('Bokassa_count').innerHTML = B_p;
             var e = document.getElementById('Bokassa_prix').innerHTML = (  B_p * 40); 
             let bokassa_big_t = document.getElementById('Bokassa_big_count').innerHTML =  B_G ;
             var f = document.getElementById('Bokassa_big_prix').innerHTML = ( B_G * 80); 
             let T_0 = document.getElementById('Bokassa_total').innerHTML = ( e + f );
            
             //****************************************************** */ 

             // *************** Total ****************** *//
              document.getElementById('T_count').innerHTML = (+R_c + +JC_C + +JM_C + +D_C + +bokassa)  ;
              document.getElementById('T_SM_prix').innerHTML = (+a + +jc_p_prix + +jM_p_prix  + +c + +e)  ;
              document.getElementById('T_count_big').innerHTML = (+bokassa_big_t + +dembi_big_t + +jm_big_t  + +jc_big_t + +R_big_t)  ;
              document.getElementById('T_count_big_prix').innerHTML = (+b + +jc_G_prix + +jM_G_prix  + +d + +f);  
             let toatl_last =  document.getElementById('T_All').innerHTML = (+T_0 + +T_1  + +T_2  + +T_3 + +T_4)  ;
                // show total 
                document.getElementById('show_total').innerHTML = toatl_last;



              document.getElementById('this_day').innerText = date_pre;
}
