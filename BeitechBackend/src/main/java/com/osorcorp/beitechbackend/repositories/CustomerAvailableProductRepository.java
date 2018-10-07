/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.osorcorp.beitechbackend.repositories;

import com.osorcorp.beitechbackend.entities.Customer;
import com.osorcorp.beitechbackend.entities.CustomerAvailableProduct;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author oscar
 */
public interface CustomerAvailableProductRepository extends JpaRepository<CustomerAvailableProduct, Long> {

    /**
     * Metodo para consultar los productos disponibles de un determinado
     * cliente.
     *
     * @param customer Cliente que se quiere consultar.
     * @return Lista de la parametrizacion que existe entre productos y clientes
     * de un cliente.
     */
    @Query("SELECT con FROM CustomerAvailableProduct con JOIN Product pro ON pro.id = con.product WHERE con.customer=(:customer)")
    List<CustomerAvailableProduct> findByCustomer(@Param("customer") Customer customer);

}
