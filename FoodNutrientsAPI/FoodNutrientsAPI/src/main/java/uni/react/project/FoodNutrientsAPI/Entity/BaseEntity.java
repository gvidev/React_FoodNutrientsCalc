package uni.react.project.FoodNutrientsAPI.Entity;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@MappedSuperclass
@Data //lombok shortcut for getter,setter,constr,toString
//Serve as base class that contains all relative
// properties of all entities which inherit it
public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


}
