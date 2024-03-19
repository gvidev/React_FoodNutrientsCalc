package uni.react.project.FoodNutrientsAPI.Controller;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uni.react.project.FoodNutrientsAPI.Entity.Food;
import uni.react.project.FoodNutrientsAPI.Service.FoodService;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService){this.foodService = foodService;}

    @GetMapping
    public List<Food> getAll(){return foodService.getAll();}

    @PostMapping()
    public void addFood(@RequestBody Food food){
        //boolean check = place
    }

}
