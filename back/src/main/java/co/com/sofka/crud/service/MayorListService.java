package co.com.sofka.crud.service;

import co.com.sofka.crud.entity.MayorList;
import co.com.sofka.crud.repository.MayorListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MayorListService {
    @Autowired
    private MayorListRepository repositoryMayor;

    public Iterable<MayorList> list(){
        return repositoryMayor.findAll();
    }

    public MayorList save(MayorList mayorList){
        return repositoryMayor.save(mayorList);
    }

    public void delete(Long idlist){
        repositoryMayor.delete(get(idlist));
    }

    public MayorList get(Long idlist){
        return repositoryMayor.findById(idlist).orElseThrow();
    }

}
