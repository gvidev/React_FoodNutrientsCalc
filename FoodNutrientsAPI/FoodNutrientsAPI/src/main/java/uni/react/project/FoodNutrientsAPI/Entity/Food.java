package uni.react.project.FoodNutrientsAPI.Entity;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "foodNutrients")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Food extends BaseEntity {

    @Column(length = 80, nullable = false, unique = true)
    private String description;
    @Column(nullable = false)
    private Integer calories;
    @Column(nullable = false)
    private Float fats;
    @Column(nullable = false)
    private Float carbohydrates;
    @Column(nullable = false)
    private Float proteins;



}
