package uni.react.project.FoodNutrientsAPI.Service;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uni.react.project.FoodNutrientsAPI.Entity.Food;
import uni.react.project.FoodNutrientsAPI.Repository.FoodRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository){this.foodRepository = foodRepository;}

    public List<Food> getAll(){return foodRepository.findAll();}

    public List<Food> getByQuery(String query){
       return foodRepository.findTop5ByDescriptionContainingIgnoreCase(query);
    }


    public boolean checkIfExist(String foodName){
        Optional<Food> food = foodRepository.findByDescription(foodName);
        return food.isPresent();
    }

    public boolean addFood(Food food){
        boolean check = checkIfExist(food.getDescription());
        if(!check){
            foodRepository.save(food);
            return true;
        }
        return false;
    }




    @PostConstruct
    public void postConstruct(){
        Food f1 = new Food("Печена кокошка",173, 4.51f, 0.1f, 30.91f );
        Food f2 = new Food("Сварено яйце",155, 10.61f, 1.12f, 12.58f );
        foodRepository.saveAll(List.of(f1,f2));
    }

}
