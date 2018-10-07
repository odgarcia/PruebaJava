/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.osorcorp.beitechbackend.repositories;

import com.osorcorp.beitechbackend.entities.Customer;
import com.osorcorp.beitechbackend.entities.CustomerOrder;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author oscar
 */
public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {

    /**
     *
     * @param customer Cliente que se quiere consultar.
     * @return Lista de ordenes.
     */
    @Query("SELECT con FROM CustomerOrder con WHERE con.customer=(:customer)")
    public List<CustomerOrder> findByCustomer(@Param("customer") Customer customer);

}
