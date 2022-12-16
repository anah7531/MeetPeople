package com.meetPeople.controller;

import com.meetPeople.entity.Evaluation;
import com.meetPeople.services.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/evaluation")
@CrossOrigin("*")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    @PostMapping("/saveEvaluation")
    public boolean saveEvaluation(@RequestBody Evaluation evaluation){
        return evaluationService.saveEvaluation(evaluation);
    }



}
