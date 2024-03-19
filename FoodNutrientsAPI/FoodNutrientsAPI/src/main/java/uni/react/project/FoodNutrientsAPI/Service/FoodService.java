package uni.react.project.FoodNutrientsAPI.Service;

/*
Project name FoodNutrientsAPI
Created by georgi on date 3/19/2024
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uni.react.project.FoodNutrientsAPI.Repository.FoodRepository;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository){this.foodRepository = foodRepository;}

}
