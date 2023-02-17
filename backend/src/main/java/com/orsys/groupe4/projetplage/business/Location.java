package com.orsys.groupe4.projetplage.business;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Location {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private LocalDateTime dateHeureDebut;
    
    private LocalDateTime dateHeureFin;
    
    private double montantAReglerEnEuros;
    
    @Column(length = 300)
    private String remarques;
    
    @NotNull
    @ManyToMany(mappedBy = "locations", fetch = FetchType.EAGER)
    private List<Parasol> parasols;
    
    @ManyToOne
    private Locataire locataire;
    
    @OneToOne
    private Statut statut;
    
    @OneToOne
    private Concessionnaire concessionnaire;
}