/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.osorcorp.beitechbackend.repositories;

import com.osorcorp.beitechbackend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author oscar
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

