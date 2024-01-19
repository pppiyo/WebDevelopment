//
//  ViewController.swift
//  CountriesToVisit
//
//  Created by Amy Lee on 8/16/23.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var citiesTableView: UITableView!
    
    var cities: [String] = ["Tokyo", "Seoul", "Washington", "Chongqin", "Hongkong", "Hokaido", "San Fransisco", "New York", "New Deli", "Guangzhou"]

    var cityCountry: [String: String] = ["Tokyo": "Japan", "Seoul": "Korea", "Washington": "USA", "Chongqin": "China", "Hongkong": "China", "Hokaido": "Japan", "San Fransisco": "USA", "New York": "USA", "New Deli": "India", "Guangzhou": "China"]
    
    struct Constants {
        static let cellIdentifier = "Cell"
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        citiesTableView.register(UITableViewCell.self, forCellReuseIdentifier: Constants.cellIdentifier)
    }
}

extension ViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return cities.count
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let tableViewCell = tableView.dequeueReusableCell(withIdentifier: Constants.cellIdentifier, for: indexPath)
        
        var cellContentConfiguration = tableViewCell.defaultContentConfiguration()
        cellContentConfiguration.text = cities[indexPath.row]
        let cityName = cities[indexPath.row]
        cellContentConfiguration.secondaryText = cityCountry[cityName]
        tableViewCell.contentConfiguration = cellContentConfiguration
        
        return tableViewCell
    }
}

extension ViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView,
                   didSelectRowAt indexPath: IndexPath) {
        print("user tapped on cell city: \(cities[indexPath.row]) country: \(cityCountry[cities[indexPath.row]]!)")
        //        tableView.deselectRow(at: indexPath, animated: true)
        //        tableView.deselectRow(at: indexPath, animated: false)
    }
}
