package uni.react.project.FoodNutrientsAPI.Controller;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uni.react.project.FoodNutrientsAPI.Entity.Food;
import uni.react.project.FoodNutrientsAPI.Service.FoodService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin("*")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService){this.foodService = foodService;}

    @GetMapping
    public List<Food> getAll(){return foodService.getAll();}

    @GetMapping("/search")
    public ResponseEntity<List<Food>> getFoodByQuery(@RequestParam String query){
        if(foodService.getByQuery(query)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Food> ff =  foodService.getByQuery(query);
        return new ResponseEntity<>(foodService.getByQuery(query),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Food> addFood(@RequestBody Food food){
        boolean check = foodService.addFood(food);
        if(check){
            return new ResponseEntity<>(food, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

}
