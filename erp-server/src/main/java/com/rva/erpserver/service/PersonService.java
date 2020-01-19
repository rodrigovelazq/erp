package com.rva.erpserver.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.rva.erpserver.dao.PersonDao;
import com.rva.erpserver.model.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    private final PersonDao personDao;
    
    @Autowired
    public PersonService(@Qualifier("postgres") PersonDao personDao) {
        this.personDao = personDao;
    }

    public Person addPerson(Person person){
        person.setId(UUID.randomUUID());
        return personDao.save(person);
    }

    public List<Person> getAllPeople(){
        return personDao.findAll();
    }

    public Page<Person> getAllPagingPeople(Integer page, Integer size){
        return personDao.findAll(PageRequest.of(page, size));
    }

    public Optional<Person> getPeopleById(UUID id){
        return personDao.findById(id);
    }

    public void deletePerson(UUID id){
        personDao.deleteById(id);
    }

    public Person updatePerson(UUID id, Person person){
        Person old = personDao.getOne(id);
        old.setName(person.getName());
        return personDao.save(person);
    }
}