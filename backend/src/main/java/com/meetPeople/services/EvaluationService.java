package com.meetPeople.services;

import com.meetPeople.entity.Evaluation;
import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import com.meetPeople.repository.EvaluationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class EvaluationService {

    @Autowired
    EvaluationRepository evaluationRepository;

    @Autowired
    MatchService matchService;

    @Transactional
    public boolean saveEvaluation(Evaluation evaluation){
        boolean haveMatched = matchService.isMatch(evaluation.getIdMembreEvaluateur(), evaluation.getIdMembreEvalue());
        List evaluationList = evaluationRepository.searchIfAnEvaluationExists(evaluation.getIdMembreEvaluateur(), evaluation.getIdMembreEvalue());

        System.out.println("Match: "+haveMatched);
        System.out.println("Evaluation: "+ evaluationList);

        //Membre peut seulement évaluer un membre avec qui il a eu une interaction donc il a match
        //ET quand une évaluation n'a pas été encore faites.
        if (haveMatched && evaluationList.isEmpty()){
            evaluation.setIdEvaluation(0);
            evaluation.setDate((java.sql.Date) new Date());
            evaluationRepository.save(evaluation);

            return true;
        }
            else  return false;
    }

}
