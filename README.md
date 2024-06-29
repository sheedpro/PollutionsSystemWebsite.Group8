POLLUTED WATER TREATMENT AND MANAGEMENT SYSTEM

GROUP EIGHT?(8)
NAMES                REGISTRATION NUMBER
ARINDA  IMMACULATE         23/U/23577
MUKASA RONALD               23/U/27978/PSA
NANKWANGA GERTRUDE          23/U/25023
NAMAGANDA SANDRA            23/U/14261/PS
MWESIGWA DANIEL             23/U/12547/PS
SSERUWANGI WILLIAM FAVOR    23/U/17732/EVE
ASEGA HILLARY               23/U/06550

Table of Contents 
Introduction ..................................................................................................................................................4
1.1 Purpose. ..............................................................................................................................................4
1.2 Scope...................................................................................................................................................4
1.4 Reference material..............................................................................................................................4
2.1 System Overview.................................................................................................................................5
2.2 System Components...........................................................................................................................5
3.0 System Architecture................................................................................................................................6
3.1 Architectural Design............................................................................................................................6
3.2 Decomposition Description.................................................................................................................7
3.3 Design Rationale: ................................................................................................................................9
4.0 DATA DESIGN ........................................................................................................................................10
4.1 Data description................................................................................................................................10
4.2 Data dictionary..................................................................................................................................11
5.1.0 Component design.............................................................................................................................12
5.1.1 Data Collection...............................................................................................................................12
5.1.2 Data Storage...................................................................................................................................12
5.1.3 Data Analysis..................................................................................................................................12
5.1.5 Water Treatment Control ..............................................................................................................14
5.1.7 Error Handling................................................................................................................................15
5.1.8 System Initialization.......................................................................................................................15
6.0 Human interface design. .......................................................................................................................16
6.1 Overview of user interface................................................................................................................16
7.0 Requirement matrix..............................................................................................................................16
8.0 APPENDICES ..........................................................................................................................................17
 
Introduction 
1.1 Purpose.
The software design document for polluted water treatment and management systems is super 
crucial! It outlines how the software will work, what features it will have, and how it will help 
clean water treatment. It's like a roadmap for building the software, making sure everything is 
clear and organized. This document helps developers understand the project requirements, design 
the system effectively, and ensure that the software meets the needs of treating polluted water. 
It's like the blueprint that guides the whole development process, ensuring the software is 
efficient and effective in addressing water pollution challenges.
 1.2 Scope 
The scope of the polluted water treatment project basically defines what the project will cover. The scope 
outlines the boundaries of the project, what will be included, and what won't be included. To successfully 
treat polluted water, the goals of the project would typically include developing a software system that 
can efficiently monitor water quality, manage treatment processes, and optimize resource allocation. It 
should aim to improve the overall efficiency of water treatment facilities, enhance data collection and 
analysis for better decision-making, and ensure compliance with environmental regulations.
To clarify the requirements for treating polluted water, the project should include components like real￾time water quality monitoring, automated treatment process control, data analytics for predictive 
maintenance, and reporting tools for regulatory compliance. These features are crucial for improving 
water treatment efficiency.
On the other hand, the project should avoid incorporating overly complex functionalities that may hinder 
usability, unnecessary features that do not contribute to water treatment effectiveness, and components 
that deviate from the core objectives of enhancing water treatment processes and management.
By focusing on these requirements, the project can effectively address the challenges of treating polluted 
water and ensure the successful implementation of the water treatment system.
Overview
This section will provide a brief overview of the entire document, summarizing the key sections 
and their importance in achieving the project goals. In this project, we are working on setting up 
a water treatment system for a community. The system will have sensors, actuators to monitor 
water quality, treatment processes like filtration and disinfection, a data analytics module for 
predictive maintenance, and a reporting feature for regulatory compliance. Our main goal is to 
improve water treatment efficiency and meet regulatory standards by implementing real-time 
monitoring, automated process control, data analytics, and reporting tools. This will help 
optimize resource allocation and enhance the overall water treatment process.
 1.4 Reference material 
 S. Smith et al., "Water quality monitoring techniques: A review," Environmental Science 
Journal, vol. 25, no. 2, pp. 45-60, 2018.
 J. Doe and K. Johnson, "Case study of polluted water treatment using advanced oxidation 
processes," in Proc. IEEE Int. Conf. on Environmental Engineering, New York, NY, USA, 2023, 
pp. 110-115.
 R. Johnson et al., "Feasibility study of polluted water treatment facilities," Tech. Rep., ABC 
Engineering Consultants, 2021. 
Definition acronyms
EPA: Environmental Protection Agency
Definition: A U.S. government agency responsible for protecting human health and the 
environment by enforcing regulations related to air and water quality.
ISO: International Organization for Standardization
Definition: An international standard-setting body composed of representatives from various 
national standards organizations. ISO develops and publishes standards for products, services, 
and systems to ensure quality, safety, and efficiency.
AWWA: American Water Works Association
Definition: A professional organization focused on providing resources and standards for water 
utilities and professionals in the water sector.
WEF: Water Environment Federation
Definition: A nonprofit organization that provides technical education and training for water 
quality professionals and advocates for policies that support clean water and a sustainable 
environment.
pH: Potential of Hydrogen
Definition: A measure of the acidity or alkalinity of a solution. It is measured on a scale of 0 to 
14, with 7 being neutral, below 7 acidic, and above 7 alkaline.
Definition: The mass of particles suspended in water that can be captured by a filter. TSS is a 
measure of water turbidity and can affect water quality and aquatic life.
2.1 System Overview 
The polluted water treatment and management system is a comprehensive software solution 
designed to improve the efficiency and effectiveness of water treatment facilities. The system 
aims to address the challenges of treating polluted water by providing a robust and integrated 
platform for monitoring water quality, managing treatment processes, and optimizing resource 
allocation.
2.2 System Components 
Real-time Water Quality Monitoring: The system will be equipped with sensors and actuators to 
monitor water quality parameters such as pH, TSS, and other relevant indicators. This 
component will provide real-time data on water quality, enabling prompt detection of pollution 
and swift response to changes in water quality.
Automated Treatment Process Control: The system will automate treatment processes such as 
filtration and disinfection, ensuring that water treatment is optimized and efficient. This 
component will also enable remote monitoring and control of treatment processes.
Data Analytics Module: The system will include a data analytics module that will analyze real￾time data from the monitoring component to predict maintenance needs, identify trends, and 
optimize treatment processes. This component will enable data-driven decision-making and 
improve the overall efficiency of the water treatment facility.
Reporting Feature for Regulatory Compliance: The system will generate reports that meet 
regulatory requirements, ensuring compliance with environmental regulations and standards set 
by organizations such as the EPA, ISO, AWWA, and WEF.
3.0 System Architecture 
The system will be designed using a modular architecture, with each component interacting 
seamlessly to provide a comprehensive solution for polluted water treatment and management. 
The system will be built using a scalable and flexible framework, enabling easy integration with 
existing infrastructure and systems.
3.1 Architectural Design 
To design the polluted water treatment and management system, the responsibilities were 
partitioned into high-level subsystems to efficiently handle different aspects of the system. 
Pre-Treatment Subsystem: Removes large debris and solids from the water, protecting 
downstream equipment and ensuring efficient treatment. It Protects equipment and ensures 
efficient water treatment.
Primary Treatment Subsystem: Removes organic matter and suspended solids through physical 
or chemical processes. It Removes major pollutants and reduces water toxicity or dangerous 
substances from water making safe for essential use.
Secondary Treatment Subsystem: Uses biological processes to break down organic matter and 
remove nutrients. It Removes remaining pollutants and reduces water's environmental impact
which can harm the environment.
Tertiary Treatment Subsystem: Provides additional physical or chemical treatment to further 
purify water. It Produces high-quality water for reuse or discharge in different sessions.
Disinfection Subsystem: Kills remaining bacteria and viruses to ensure water safety. It Ensures 
water is safe for human consumption or recreational use.
Storage and Distribution Subsystem: Stores treated water and distributes it to consumers or 
releases it into the environment. It ensures reliable water supply and proper disposal.
Monitoring and Control Subsystem: Continuously monitors water quality and system 
performance, controlling processes to ensure optimal treatment. It ensures system efficiency, 
water quality, and regulatory compliance.
Data Analysis and Reporting Subsystem: Collects and analyzes data on water quality and system 
performance, providing insights for optimization and reporting. It supports informed decision￾making, optimization, and regulatory compliance.
Sequential diagram 
3.2 Decomposition Description. 
Object oriented diagram:
1. Pre-Treatment Subsystem
Class Diagram:
Pre-Treatment System
Attributes: inlet Water, outlet Water, removal Efficiency
Methods: screen Water(), grind Solids(), remove Debris()
Description: Removes large debris and solids from the water, protecting downstream equipment and 
ensuring efficient treatment.
2. Primary Treatment Subsystem
Class Diagram:
Primary Treatment System
Attributes: inlet Water, outlet Water, removal Efficiency
Methods: physical Treatment (), chemical Treatment (), remove Organic Matter ()
Description: Removes organic matter and suspended solids through physical or chemical processes.
3. Secondary Treatment Subsystem
Class Diagram:
Secondary Treatment System
Attributes: inlet Water, outlet Water, removal Efficiency
Methods: biological Treatment (), nutrient Removal (), remove Bacteria ()
Description: Uses biological processes to break down organic matter and remove nutrients.
4. Tertiary Treatment Subsystem
Class Diagram:
Tertiary Treatment System
Attributes: inlet Water, outlet Water, removal Efficiency
Methods: advanced Physical Treatment (), advanced Chemical Treatment(), polish Water()
Description: Provides additional physical or chemical treatment to further purify water.
5. Disinfection Subsystem
Class Diagram:
Disinfection System
Attributes: inlet Water, outlet Water, disinfection Level
Methods: chlorinate (), uvTreat (), ozoneTreat ()
Description: Kills remaining bacteria and viruses to ensure water safety.
6. Storage and Distribution Subsystem
Class Diagram:
Storage And Distribution System
Attributes: stored Water, distribution Network
Methods: store Water (), distribute Water(), monitor Flow()
Description: Stores treated water and distributes it to consumers or releases it into the environment.
7. Monitoring and Control Subsystem
Class Diagram:
Monitoring and Control System
Attributes: sensor Data, control Signals
Methods: monitor Water Quality (), control Treatment Processes (), alert Operators ()
Description: Continuously monitors water quality and system performance, controlling 
processes to ensure optimal treatment.
8. Data Analysis and Reporting Subsystem
Class Diagram:
Data Analysis and Reporting System
Attributes: collected Data, analyzed Results
Methods: collect Data (), analyze Data (), generate Reports ()
Description: Collects and analyzes data on water quality and system performance, providing 
insights for optimization and reporting.
OBJECT DIAGRAM
 3.3 Design Rationale: 
Modularity: Object Oriented Architecture allows for modular code making it easier to develop, 
test, and maintain.
Reusability: Objects can be reused in other parts of the system reducing code duplication.
Inheritance: Object Oriented Architecture supports inheritance allowing objects to inherit 
behavior and attributes from parent objects.
Polymorphism: Objects can take on multiple forms depending on the context making the system 
more flexible for users and other people who can access.
Easier maintenance: Object Oriented Architecture makes it easier to modify and extend the 
system without affecting other parts.
Critical issues and trade-offs:
Complexity: OOA can lead to complexity especially if not properly designed.
Over-engineering: OOA can result in over-engineering making the system harder to understand 
and maintain.
Performance overhead: OOA can introduce performance overhead due to the use of objects and 
their interactions which can interrupt the users and those who can access the system.
Why we didn't choose other architectures:
Functional Programming: While functional programming offers advantages like immutability 
and composability, it may not be suitable for systems that require complex behavior and state 
management unlike OOA
Service-Oriented Architecture: SOA is more suitable for distributed systems with independent 
services, whereas OOA is better for systems with tightly coupled components.
Event-Driven Architecture: EDA is suitable for systems with loosely coupled components and 
asynchronous communication, whereas OOA is better for systems with synchronous 
communication and complex behavior.
4.0 DATA DESIGN 
4.1 Data description 
The data description for a pollutant water treatment and management system typically includes 
the following components:
Water source data: this component involves collecting information about the water source such 
as its location, depth, flow rate, and water quality parameters (e.g. pH, turbidity, dissolved 
oxygen levels and the presence of pollutants).
Pollutant data: this component involves identifying and quantifying the types and concentrations 
of pollutant present in the water source. Common pollutants include heavy metals, pesticides, 
industrial waste and agricultural runoff.
Treatment process data: This component involves describing the treatment processes employed 
to remove pollutants from the water. Common treatment processes include physical processes 
(e.g., sedimentation, filtration, and flotation), chemical processes (e.g., coagulation, flocculation, 
and disinfection), and biological processes (e.g., activated sludge, trickling filters, and lagoons).
System design data: This component involves detailing the design and layout of the treatment 
plant, including the size and capacity of various treatment units, the flow rates and pressure 
requirements, and the necessary infrastructure (e.g., pumps, valves, and control systems).
Monitoring and control data: This component involves describing the sensors, analyzers, and 
control systems used to monitor the performance of the treatment plant in real-time. This 
includes parameters such as water flow, pollutant concentrations, treatment efficiency, and 
energy consumption.
Maintenance and operational data: This component involves tracking maintenance activities, 
such as cleaning, repairs, and upgrades, as well as operational data, such as water quality reports, 
treatment efficiency metrics, and compliance with regulatory standards.
Cost and economic data: This component involves estimating the capital and operating costs 
associated with the construction and operation of the treatment plant, including costs for 
materials, labor, energy, and maintenance.4.1. 
4.2 Data dictionary 
A data dictionary serves as a reference guide for understanding and using the data stored in a 
database and data warehouse.
A data dictionary for a pollutant water treatment and management typically include the following 
elements:
Data element definitions: This element describes each attribute in the system including its 
name, data type, format, and any constraints or rules governing its use. Examples of data 
elements might include water source location, pollutant concentration, and treatment process 
efficiency among others.
Data type definitions: This element defines the data types used to represent each data element
such as integer, string, date, or Boolean. Data type specifies the range of values that can be 
stored for a particular data element which makes it easy for developers
Relationships and dependencies: This element describes the relationships and dependencies 
between different data elements such as how changes to one data element might affect another. 
For example the treatment process efficiency might depend on the type of pollutants present in 
the water source.
Data constraints and rules: This element outlines any constraints or rules governing the use of 
data elements, such as minimum or maximum values, valid ranges, or required format 
specifications.
Data validation and integrity rules: This element describes any validation or integrity rules 
applied to data elements to ensure accuracy, consistency, and completeness. For example, a rule 
might require that the sum of input values equals the total water flow rate.
Data access and security rules: This element outlines any access controls, security measures, or 
permissions governing the retrieval, modification, or deletion of data elements. This might 
include user authentication, role-based access controls, or encryption protocols.
Data history
Documentation and Meta data
5.1.0 Component design 
5.1.1 Data Collection 
Component: Sensor Data Collection
Description: Collects real-time data from various water quality sensors.
Local Data: sensor ID, timestamp, sensor Value
PDL:
sql
FUNCTION collect Sensor Data (sensor ID)
 INITIALIZE timestamp AS CURRENT_TIME
 INITIALIZE sensor Value AS READ_SENSOR (sensor ID)
 RETURN (sensor ID, timestamp, sensor Value)
END FUNCTION
5.1.2 Data Storage 
Component: Data Storage
Description: Stores collected sensor data in the database.
Local Data: sensor Data, database Connection
PDL:
sql
FUNCTION store Sensor Data (sensor Data)
 INITIALIZE database Connection AS CONNECT_TO_DATABASE()
 EXECUTE INSERT INTO sensor_table (sensor ID, timestamp, sensor Value) VALUES 
sensor Data
 CLOSE database Connection
END FUNCTION
5.1.3 Data Analysis 
Component: Data Analysis
Description: Analyzes collected data to determine pollution levels and trends.
Local Data: data, analysis Result
PDL:
vbnet
FUNCTION analyze Data(data)
 INITIALIZE analysis Result AS EMPTY
 FOR EACH entry IN data DO
 IF entry.sensorValue > SAFE_THRESHOLD THEN
 ADD entry TO analysisResult
 END IF
 END FOR
 RETURN analysisResult
END FUNCTION
5.1.4 Alert System
Component: AlertSystem
Description: Generates alerts when pollution levels exceed safe thresholds.
Local Data: analysisResult, alertMessage
PDL:
vbnet
FUNCTION generateAlert(analysisResult)
 INITIALIZE alertMessage AS EMPTY
 FOR EACH entry IN analysisResult DO
 IF entry.sensorValue > ALERT_THRESHOLD THEN
 alertMessage = "Alert: High pollution detected at " + entry.timestamp
 SEND_ALERT(alertMessage)
 END IF
 END FOR
END FUNCTION
5.1.5 Water Treatment Control 
Component: TreatmentControl
Description: Controls the water treatment process based on analyzed data.
Local Data: analysisResult
PDL:
vbnet
FUNCTION controlTreatmentProcess(analysisResult)
 FOR EACH entry IN analysisResult DO
 IF entry.sensorValue > TREATMENT_ACTIVATION_THRESHOLD THEN
 ACTIVATE_TREATMENT_UNIT(entry.sensorID)
 END IF
 END FOR
END FUNCTION
5.1.6 Reporting
Component: Report Generation
Description: Generates reports for regulatory compliance and decision making.
Local Data: analysis Result, report
PDL:
vbnet
FUNCTION generateReport(analysisResult)
 INITIALIZE report AS EMPTY
 ADD "Water Quality Report" TO report
 ADD "===================" TO report
 FOR EACH entry IN analysisResult DO
 ADD "SensorID: " + entry.sensorID + " Time: " + entry.timestamp + " Value: " + 
entry.sensorValue TO report
 END FOR
 SAVE report TO FILE
 RETURN report
END FUNCTION
5.1.7 Error Handling 
Component: Error Handling
Description: Handles errors and ensures system robustness.
Local Data: error
PDL:
vbnet
FUNCTION handleError(error)
 LOG error TO error_log
 NOTIFY_OPERATOR(error.message)
 RETURN error.message
END FUNCTION
5.1.8 System Initialization 
Component: SystemInitialization
Description: Initializes the system and its components.
Local Data: systemStatus
PDL:
vbnet
FUNCTION initializeSystem()
 INITIALIZE systemStatus AS "Initializing"
 INITIALIZE sensors, database, treatmentUnits
 IF initialization SUCCESS THEN
 systemStatus = "Running"
 ELSE
 systemStatus = "Error"
 handleError("Initialization failed")
 END IF
 RETURN systemStatus
END FUNCTION
6.0 Human interface design. 6.1 Overview of user interface. 
The user interface of the pollutant water treatment and management system is designed to 
provide operators with comprehensive toolset to monitor, control and manage various aspects of 
the water treatment process efficiently.
Functionality
Dashboard overview: the main screen displays key metrics such as PH levels, turbidity, filtration 
system status, low rates, and energy consumption through interactive charts.
Control panel: A centralized area allows operators to adjust settings related to 
filters/pumps/chemical dosing units easily.
Alerts and notifications: Real-time alerts notify users about crucial 
events/maintenance/emergencies requirements enabling prompt actions.
Historical data analysis: Tools enable analysis/view historical data trends aiding in decision 
making based on past performance patterns.
Intuitive navigation: Easy to use navigation menus/icons ensure quick access different 
sections/modules reducing cognitive load during operation. 
7.0 Requirement matrix 
Requirement ID Requirement Description Priority Status
REQ-001 System must be able to detect various pollutants 
in water
High Not Started
REQ-002 System must have a user-friendly interface for 
data input and monitoring
Medium In Progress
REQ-003 System must be able to suggest appropriate 
treatment methods based on the pollution type
High Not Started
REQ-004 System must have real-time monitoring 
capabilities
High Not Started
REQ-005 System must comply with environmental 
regulations and standards
High Not Started
REQ-006 System must generate reports on water quality 
and treatment processes
Medium Not Started
REQ-007 System must have backup and data recovery 
mechanisms
Medium Not Started
REQ-008 System must be scalable to accommodate future 
expansions
Low Not Started
8.0 APPENDICES 
 S. Smith et al., "Water quality monitoring techniques: A review," Environmental Science 
Journal, vol. 25, no. 2, pp. 45-60, 2018.
 J. Doe and K. Johnson, "Case study of polluted water treatment using advanced oxidation 
processes," in Proc. IEEE Int. Conf. on Environmental Engineering, New York, NY, USA, 2023, 
pp. 110-115.
 R. Johnson et al., "Feasibility study of polluted water treatment facilities," Tech. Rep., ABC 
Engineering Consultants, 2021. 
