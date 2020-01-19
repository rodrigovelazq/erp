package com.rva.erpserver.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.rva.erpserver.model.Person;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("postgres")
public interface PersonDao extends JpaRepository<Person, UUID> {

}