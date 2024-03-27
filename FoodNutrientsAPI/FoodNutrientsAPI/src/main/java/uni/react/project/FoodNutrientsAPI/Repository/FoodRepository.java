package uni.react.project.FoodNutrientsAPI.Repository;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uni.react.project.FoodNutrientsAPI.Entity.Food;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food,Long> {


    List<Food> findTop5ByDescriptionContainingIgnoreCase(String description);
    Optional<Food> findByDescription(String desc);
}
