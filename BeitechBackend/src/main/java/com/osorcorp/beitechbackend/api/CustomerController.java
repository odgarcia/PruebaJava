/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.osorcorp.beitechbackend.api;

import com.osorcorp.beitechbackend.entities.Customer;
import com.osorcorp.beitechbackend.entities.CustomerAvailableProduct;
import com.osorcorp.beitechbackend.entities.CustomerOrder;
import com.osorcorp.beitechbackend.repositories.CustomerRepository;
import com.osorcorp.beitechbackend.repositories.CustomerAvailableProductRepository;
import com.osorcorp.beitechbackend.repositories.OrderDetailRepository;
import com.osorcorp.beitechbackend.repositories.OrderRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository; 
    
    @Autowired
    CustomerAvailableProductRepository customerAvailableProductRepository;
    
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;
    
    

    /**
     * 
     * @return 
     */
    @CrossOrigin(origins = "*")
    @RequestMapping()
    List<Customer> customers() {
        return this.customerRepository.findAll();
    }

    /**
     * 
     * @param idCustomer
     * @return 
     */
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/{idCustomer}/orders")
    List<CustomerOrder> customerOrders(@PathVariable Long idCustomer) {

        Customer customer = new Customer();
        customer.setId(idCustomer);
        List<CustomerOrder> list = this.orderRepository.findByCustomer(customer);
        return list;
    }
    
    /**
     * 
     * @param idCustomer
     * @return 
     */
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/{idCustomer}/products")
    List<CustomerAvailableProduct> customerProducts(@PathVariable Long idCustomer) {

        Customer customer = new Customer();
        customer.setId(idCustomer);
        List<CustomerAvailableProduct> list = this.customerAvailableProductRepository.findByCustomer(customer);
        return list;
    }

}

