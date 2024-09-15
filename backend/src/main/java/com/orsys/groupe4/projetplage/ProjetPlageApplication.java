package com.orsys.groupe4.projetplage;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.logging.Level;
import java.util.logging.Logger;


@EnableScheduling
@SpringBootApplication
public class ProjetPlageApplication {
    
    private final Logger logger = Logger.getLogger(ProjetPlageApplication.class.getName());
    
    public static void main(String[] args) {
        SpringApplication.run(ProjetPlageApplication.class, args);
    }
    
    //@Bean
    @Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
    public CommandLineRunner commandLineRunner(ApplicationContext applicationContext) {
        return args -> {
            
            String[] noms = applicationContext.getBeanDefinitionNames();
            
            for (String nom : noms) {
                String message = nom + " : " + applicationContext.getBean(nom).getClass().getSimpleName();
                logger.log(Level.INFO, message);
            }
        };
    }
}
