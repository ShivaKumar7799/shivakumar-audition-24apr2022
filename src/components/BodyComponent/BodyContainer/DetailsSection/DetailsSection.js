import React from 'react'
import NameComponent from '../NameSection/NameComponent/NameComponent'
import DetailsComponent from './Details Component/DetailsComponent'
import './detailsSection.css'

export default function DetailsSection() {
  return (
    <div class = "detailsSection" >
      <div class = "special heading "> <NameComponent name = "Name" /> <DetailsComponent email = "Email" phone = "Phone" status = "Status" typeOfUpload = "Uploaded Type" DateAdded= "Date Added" /> </div>
      <div class = "special"> <NameComponent name = "Jane Cooper" /><DetailsComponent email = "aima.lawson@example.com" phone = "(319)555-0115" status = "Open" typeOfUpload = "Manually added" DateAdded= "11/7/16" /> </div>
      <div class = "special"> <NameComponent name = "Wade Warren" />  <DetailsComponent email = "tim.jennings@example.com" phone = "(229)555-0109" status = "Open" typeOfUpload = "Manually added" DateAdded= " 10/6/13" /> </div>
      <div class = "special"> <NameComponent name = "Esther Howard" /> <DetailsComponent email = "estherhoward@example.com" phone = "(208)555-0112" status = "Open" typeOfUpload = "Manually added" DateAdded= "2/11/12 " /> </div>
      <div class = "special"> <NameComponent name = "Cameron Willamson" />  <DetailsComponent email = "cameronwillam@example.com" phone = "(702)555-0122" status = "In Progress" typeOfUpload = "Web form" DateAdded= "7/18/17 " /> </div>
      <div class = "special"> <NameComponent name = "Brooklyn Simmons" /> <DetailsComponent email = "brooklyn@exmaple.com" phone = "(684)555-0102" status = "On Hold" typeOfUpload = "Intercom" DateAdded= "3/4/16 " /> </div>
      <div class = "special"> <NameComponent name = "Leslie Alexandor" /> <DetailsComponent email = "leslie@example.com" phone = "(307)555-0133" status = "Open" typeOfUpload = "Intercom" DateAdded= "12/4/17 "/> </div>
      <div class = "special"> <NameComponent name = "Jenny Wilson" /> <DetailsComponent email = "jennywilson@example.com" phone = "(808)555-0111" status = "Open" typeOfUpload = "bulk upload" DateAdded= "5/7/16 "/> </div>
      <div class = "special"> <NameComponent name = "Guy Hawkins" />  <DetailsComponent email = "guthawkins@exmple.com" phone = "(308)555-0121" status = "Closed" typeOfUpload = "bulk upload" DateAdded= "1/31/14 " /> </div>
      <div class = "special"> <NameComponent name = "Robert Fox" /> <DetailsComponent email = "roberfox@example.com" phone = "(308)555-0121" status = "In Progress" typeOfUpload = "Bulk upload" DateAdded= "12/10/13 " /> </div>
      <div class = "special"> <NameComponent name = "Jacob Jones" /> <DetailsComponent email = "jacobjones@example.com" phone = "(405)555-0128" status = "Open" typeOfUpload = "Bulk upload" DateAdded= "8/16/13 " /> </div>
    </div>
  )
}
