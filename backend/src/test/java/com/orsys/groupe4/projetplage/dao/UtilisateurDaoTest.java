package com.orsys.groupe4.projetplage.dao;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UtilisateurDaoTest {
    
    @Autowired
    UtilisateurDao dao;
    
   /* @Test
    void testGetId() {
        String mail = "toto@titi.fr";
        int res = dao.getId(mail);
        assertThat(res == 2);
    }*/
}
