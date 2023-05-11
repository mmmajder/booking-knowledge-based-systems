export class Airport {
  name: string;
  country: string;
  code: string;

  constructor(name: string, country: string, code: string) {
    this.name = name;
    this.country = country;
    this.code = code;
  }
}

export const airports: Airport[] = [
  new Airport("Aarhus", "Denmark", "AAR"),
  new Airport("Abadan", "Iran", "ABD"),
  new Airport("Abeche", "Chad", "AEH"),
  new Airport("Aberdeen", "United Kingdom", "ABZ"),
  new Airport("Aberdeen (SD)", "USA", "ABR"),
  new Airport("Abidjan", "Cote d'Ivoire", "ABJ"),
  new Airport("Abilene (TX)", "USA", "ABI"),
  new Airport("Abu Dhabi - Abu Dhabi International", "United Arab Emirates", "AUH"),
  new Airport("Abuja - Nnamdi Azikiwe International Airport", "Nigeria", "ABV"),
  new Airport("Abu Rudeis", "Egypt", "AUE"),
  new Airport("Abu Simbel", "Egypt", "ABS"),
  new Airport("Acapulco", "Mexico", "ACA"),
  new Airport("Accra - Kotoka International Airport", "Ghana", "ACC"),
  new Airport("Adana", "Turkey", "ADA"),
  new Airport("Addis Ababa - Bole International Airport", "Ethiopia", "ADD"),
  new Airport("Adelaide", "Australia", "ADL"),
  new Airport("Aden - Aden International Airport", "Yemen", "ADE"),
  new Airport("Adiyaman", "Turkey", "ADF"),
  new Airport("Adler/Sochi", "Russia", "AER"),
  new Airport("Agades", "Niger", "AJY"),
  new Airport("Agadir", "Morocco", "AGA"),
  new Airport("Agana (Hagåtña)", "Guam", "SUM"),
  new Airport("Aggeneys", "South Africa", "AGZ"),
  new Airport("Aguadilla", "Puerto Rico", "BQN"),
  new Airport("Aguascaliente", "Mexico", "AGU"),
  new Airport("Ahmedabad", "India", "AMD"),
  new Airport("Aiyura", "Papua New Guinea", "AYU"),
  new Airport("Ajaccio", "France", "AJA"),
  new Airport("Akita", "Japan", "AXT"),
  new Airport("Akron (OH)", "USA", "CAK"),
  new Airport("Akrotiri - RAF", "Cyprus", "AKT"),
  new Airport("Al Ain", "United Arab Emirates", "AAN"),
  new Airport("Al Arish", "Egypt", "AAC"),
  new Airport("Albany", "Australia", "ALH"),
  new Airport("Albany (GA)", "USA", "ABY"),
  new Airport("Albany (NY) - Albany International Airport", "USA", "ALB"),
  new Airport("Albi", "France", "LBI"),
  new Airport("Alborg", "Denmark", "AAL"),
  new Airport("Albuquerque (NM)", "USA", "ABQ"),
  new Airport("Albury", "Australia", "ABX"),
  new Airport("Alderney", "Channel Islands", "ACI"),
  new Airport("Aleppo", "Syria", "ALP"),
  new Airport("Alesund", "Norway", "AES"),
  new Airport("Alexander Bay - Kortdoorn", "South Africa", "ALJ"),
  new Airport("Alexandria - Borg el Arab Airport", "Egypt", "HBH"),
  new Airport("Alexandria - El Nhouza Airport", "Egypt", "ALY"),
  new Airport("Alexandria - Esler Field", "USA (LA)", "ESF"),
  new Airport("Alfujairah (Fujairah)", "United Arab Emirates", "FJR"),
  new Airport("Alghero Sassari", "Italy", "AHO"),
  new Airport("Algiers, Houari Boumediene Airport", "Algeria", "ALG"),
  new Airport("Al Hoceima", "Morocco", "AHU"),
  new Airport("Alicante", "Spain", "ALC"),
  new Airport("Alice Springs", "Australia", "ASP"),
  new Airport("Alldays", "South Africa", "ADY"),
  new Airport("Allentown (PA)", "USA", "ABE"),
  new Airport("Almaty (Alma Ata) - Almaty International Airport", "Kazakhstan", "ALA"),
  new Airport("Almeria", "Spain", "LEI"),
  new Airport("Alta", "Norway", "ALF"),
  new Airport("Altay", "PR China", "AAT"),
  new Airport("Altenrhein", "Switzerland", "ACH"),
  new Airport("Altoona (PA)", "USA", "AOO"),
  new Airport("Altus", "USA", "AXS"),
  new Airport("Amami", "Japan", "ASJ"),
  new Airport("Amarillo (TX)", "USA", "AMA"),
  new Airport("Amazon Bay", "Papua New Guinea", "AZB"),
  new Airport("Amman - Queen Alia International Airport", "Jordan", "AMM"),
  new Airport("Amman - Amman-Marka International Airport", "Jordan", "ADJ"),
  new Airport("Amritsar", "India", "ATQ"),
  new Airport("Amsterdam - Amsterdam Airport Schiphol", "Netherlands", "AMS"),
  new Airport("Anand", "India", "QNB"),
  new Airport("Anchorage (AK) - Ted Stevens Anchorage International", "USA", "ANC"),
  new Airport("Ancona - Ancona Falconara Airport", "Italy", "AOI"),
  new Airport("Andorra La Vella - Heliport", "Andorra", "ALV"),
  new Airport("Anguilla", "Anguilla", "AXA"),
  new Airport("Anjouan - Anjouan Airport", "Comoros (Comores)", "AJN"),
  new Airport("Ankara", "Turkey", "ANK"),
  new Airport("Ankara - Esenboğa International Airport", "Turkey", "ESB"),
  new Airport("Annaba", "Algeria", "AAE"),
  new Airport("Ann Arbor (MI)", "USA", "ARB"),
  new Airport("Annecy", "France", "NCY"),
  new Airport("Anniston (AL)", "USA", "ANB"),
  new Airport("Antalya", "Turkey", "AYT"),
  new Airport("Antananarivo (Tanannarive) - Ivato International Airport", "Madagascar", "TNR"),
  new Airport("Antigua, V.C. Bird International", "Antigua and Barbuda", "ANU"),
  new Airport("Antwerp", "Belgium", "ANR"),
  new Airport("Aomori", "Japan", "AOJ"),
  new Airport("Apia - Faleolo International Airport", "Samoa", "APW"),
  new Airport("Appelton/Neenah/Menasha (WI)", "USA", "ATW"),
  new Airport("Aqaba", "Jordan", "AQJ"),
  new Airport("Aracaju", "Brazil", "AJU"),
  new Airport("Arkhangelsk", "Russia", "ARH"),
  new Airport("Arusha", "Tanzania", "ARK"),
  new Airport("Araxos", "Greece", "GPA"),
  new Airport("Arlit", "Niger", "RLT"),
  new Airport("Arrecife/Lanzarote", "Spain", "ACE"),
  new Airport("Aruba - Reina Beatrix International, Oranjestad", "Aruba", "AUA"),
  new Airport("Asheville (NC)", "USA", "AVL"),
  new Airport("Ashgabat - Saparmurat Turkmenbashy Int. Airport", "Turkmenistan", "ASB"),
  new Airport("Asmara - Asmara International", "Eritrea", "ASM"),
  new Airport("Aspen, (CO) - Aspen-Pitkin County Airport", "USA", "ASE"),
  new Airport("Assiut", "Egypt", "ATZ"),
  new Airport("Astana - Astana International Airport", "Kazakhstan", "TSE"),
  new Airport("Asuncion - Asunción International Airport", "Paraguay", "ASU"),
  new Airport("Aswan - Daraw Airport", "Egypt", "ASW"),
  new Airport("Athens - Elefthérios Venizélos International Airport", "Greece", "ATH"),
  new Airport("Athens, Hellinikon Airport", "Greece", "HEW"),
  new Airport("Athens (GA)", "USA", "AHN"),
  new Airport("Athens (OH)", "USA", "ATO"),
  new Airport("Atlanta (GA) - Hartsfield Atlanta International Airport", "USA", "ATL"),
  new Airport("Atlantic City (NJ) - Atlantic City International", "USA", "ACY"),
  new Airport("Attawapiskat, NT", "Canada", "YAT"),
  new Airport("Auckland - Auckland International Airport", "New Zealand", "AKL"),
  new Airport("Augsburg - Augsbur gAirport", "Germany", "AGB"),
  new Airport("Augusta (GA)", "USA", "AGS"),
  new Airport("Augusta (ME) - Augusta State Airport", "USA", "AUG"),
  new Airport("Aurillac", "France", "AUR"),
  new Airport("Austin (TX) - Austin-Bergstrom Airport", "USA", "AUS"),
  new Airport("Ayawasi", "Indonesia", "AYW"),
  new Airport("Ayers Rock - Connellan", "Australia", "AYQ"),
  new Airport("Ayr", "Australia", "AYR"),
  new Airport("Badajoz", "Spain", "BJZ"),
  new Airport("Bagdad - Baghdad International Airport", "Iraq", "BGW"),
  new Airport("Bagdogra", "India", "IXB"),
  new Airport("Bahamas - Lynden Pindling International Airport", "The Bahamas", "NAS"),
  new Airport("Bahawalpur", "Pakistan", "BHV"),
  new Airport("Bahrain - Bahrain International Airport", "Bahrain", "BAH"),
  new Airport("Bakersfield (CA)", "USA", "BFL"),
  new Airport("Baku - Heydar Aliyev International Airport", "Azerbaijan", "BAK"),
  new Airport("Ballina", "Australia", "BNK"),
  new Airport("Baltimore (MD) - Washington International Airport", "USA", "BWI"),
  new Airport("Bamaga", "Australia", "ABM"),
  new Airport("Bamako - Bamako-Sénou International Airport", "Mali", "BKO"),
  new Airport("Bambari", "Central African Republic", "BBY"),
  new Airport("Bandar Seri Begawan - Brunei International Airport", "Brunei", "BWN"),
  new Airport("Bandung - Husein Sastranegara International Airport", "Indonesia", "BDO"),
  new Airport("Bangalore", "India", "BLR"),
  new Airport("Bangassou", "Central African Republic", "BGU"),
  new Airport("Bangkok, Don Muang", "Thailand", "DMK"),
  new Airport("Bangkok, Suvarnabhumi International", "Thailand", "BKK"),
  new Airport("Bangor (ME)", "USA", "BGR"),
  new Airport("Bangui - M'Poko International Airport", "Central African Republic", "BGF"),
  new Airport("Banjul - Banjul International Airport (Yundum International)", "Gambia", "BJL"),
  new Airport("Bannu", "Pakistan", "BNP"),
  new Airport("Barcelona", "Spain", "BCN"),
  new Airport("Barcelona", "Venezuela", "BLA"),
  new Airport("Bardufoss", "Norway", "BDU"),
  new Airport("Bari", "Italy", "BRI"),
  new Airport("Barisal", "Bangladesh", "BZL"),
  new Airport("Baroda", "India", "BDQ"),
  new Airport("Barra (the famous tidal beach landing)", "United Kingdom", "BRR"),
  new Airport("Barranquilla", "Colombia", "BAQ"),
  new Airport("Basel", "Switzerland", "BSL"),
  new Airport("Basel/Mulhouse", "Switzerland/France", "EAP"),
  new Airport("Basra, Basrah", "Iraq", "BSR"),
  new Airport("Basse-Terre - Pointe-à-Pitre International Airport", "Guadeloupe", "PTP"),
  new Airport("Basseterre - Robert L. Bradshaw International Airport", "Saint Kitts and Nevis", "SKB"),
  new Airport("Bastia", "France", "BIA"),
  new Airport("Baton Rouge (LA) - Baton Rouge Metropolitan Airport", "USA", "BTR"),
  new Airport("Bayreuth - Bindlacher-Berg", "Germany", "BYU"),
  new Airport("Beaumont/Pt. Arthur (TX)", "USA", "BPT"),
  new Airport("Beckley (WV)", "USA", "BKW"),
  new Airport("Beef Island - Terrance B. Lettsome", "Virgin Islands (British)", "EIS"),
  new Airport("Beijing", "China", "PEK"),
  new Airport("Beijing - Nanyuan Airport", "China", "NAY"),
  new Airport("Beira", "Mozambique", "BEW"),
  new Airport("Beirut - Beirut Rafic Hariri International Airport", "Lebanon", "BEY"),
  new Airport("Belem - Val de Cans International Airport", "Brazil", "BEL"),
  new Airport("Belfast - George Best Belfast City Airport", "United Kingdom", "BHD"),
  new Airport("Belfast - Belfast International Airport", "United Kingdom", "BFS"),
  new Airport("Belgaum", "India", "IXG"),
  new Airport("Belgrad (Beograd) - Belgrade Nikola Tesla International", "Serbia", "BEG"),
  new Airport("Belize City - Philip S.W.Goldson International", "Belize", "BZE"),
  new Airport("Bellingham (WA)", "USA", "BLI"),
  new Airport("Belo Horizonte - Tancredo Neves International Airport", "Brazil", "CNF"),
  new Airport("Bemidji (MN)", "USA", "BJI"),
  new Airport("Benbecula", "United Kingdom", "BEB"),
  new Airport("Benghazi (Bengasi)", "Libya", "BEN"),
  new Airport("Benguela", "Angola", "BUG"),
  new Airport("Benton Harbour (MI)", "USA", "BEH"),
  new Airport("Berberati", "Central African Republic", "BBT"),
  new Airport("Bergamo/Milan - Orio Al Serio", "Italy", "BGY"),
  new Airport("Bergen", "Norway", "BGO"),
  new Airport("Bergerac - Roumanieres", "France", "EGC"),
  new Airport("Berlin", "Germany", "BER"),
  new Airport("Berlin, Schoenefeld", "Germany", "SXF"),
  new Airport("Berlin, Tegel", "Germany", "TXL"),
  new Airport("Berlin, Tempelhof (ceased operating in 2008)", "Germany", "THF"),
  new Airport("Bermuda - L.F. Wade International Airport", "Bermuda", "BDA"),
  new Airport("Berne, Bern-Belp", "Switzerland", "BRN"),
  new Airport("Berne, Railway Service", "Switzerland", "ZDJ"),
  new Airport("Bethel (AK)", "USA", "BET"),
  new Airport("Bhopal", "India", "BHO"),
  new Airport("Bhubaneswar", "India", "BBI"),
  new Airport("Biarritz", "France", "BIQ"),
  new Airport("Bilbao", "Spain", "BIO"),
  new Airport("Billings (MT)", "USA", "BIL"),
  new Airport("Billund", "Denmark", "BLL"),
  new Airport("Bintulu", "Malaysia", "BTU"),
  new Airport("Biraro", "Central African Republic", "IRO"),
  new Airport("Birmingham - Birmingham International Airport", "United Kingdom", "BHX"),
  new Airport("Birmingham (AL)", "USA", "BHM"),
  new Airport("Bishkek - Manas International Airport", "Kyrgyzstan", "FRU"),
  new Airport("Bismarck (ND) - Bismarck Municipal Airport", "USA", "BIS"),
  new Airport("Bissau - Osvaldo Vieiro International Airport", "Guinea-Bissau", "BXO"),
  new Airport("Blackpool", "United Kingdom", "BLK"),
  new Airport("Blackwater", "Australia", "BLT"),
  new Airport("Blantyre (Mandala) - Chileka International Airport", "Malawi", "BLZ"),
  new Airport("Blenheim", "New Zealand", "BHE"),
  new Airport("Bloemfontein - Bloemfontein Airport", "South Africa", "BFN"),
  new Airport("Bloomington (IL)", "USA", "BMI"),
  new Airport("Bloomington (IN)", "USA", "BMG"),
  new Airport("Bluefield (WV)", "USA", "BLF"),
  new Airport("Boa Vista", "Brazil", "BVB"),
  new Airport("Bobo/Dioulasso", "Burkina Faso", "BOY"),
  new Airport("Bodo", "Norway", "BOO"),
  new Airport("Bodrum - Milas Airport", "Turkey", "BJV"),
  new Airport("Bogota - El Nuevo Dorado International Airport", "Colombia", "BOG"),
  new Airport("Boise (ID) - Boise Air Terminal", "USA", "BOI"),
  new Airport("Bologna", "Italy", "BLQ"),
  new Airport("Bombay (Mumbai) - Chhatrapati Shivaji International", "India", "BOM"),
  new Airport("Bonaire", "Netherlands Antilles", "BON"),
  new Airport("Bonaventure, PQ", "Canada", "YVB"),
  new Airport("Bora Bora", "French Polynesia", "BOB"),
  new Airport("Bordeaux - Bordeaux Airport", "France", "BOD"),
  new Airport("Borrego Springs (CA)", "USA", "BXS"),
  new Airport("Boston (MA) - General Edward Lawrence Logan", "USA", "BOS"),
  new Airport("Bouake", "Cote d'Ivoire", "BYK"),
  new Airport("Bourgas/Burgas", "Bulgaria", "BOJ"),
  new Airport("Bournemouth", "United Kingdom", "BOH"),
  new Airport("Bowen", "Australia", "ZBO"),
  new Airport("Bozeman (MT)", "USA", "BZN"),
  new Airport("Bradford/Warren (PA) /Olean (NY)", "USA", "BFD"),
  new Airport("Brainerd (MN)", "USA", "BRD"),
  new Airport("Brampton Island", "Australia", "BMP"),
  new Airport("Brasilia - President Juscelino Kubitschek International", "Brazil", "BSB"),
  new Airport("Bratislava - M. R. Štefánik Airport", "Slovakia", "BTS"),
  new Airport("Brazzaville - Maya-Maya Airport", "Congo (ROC)", "BZV"),
  new Airport("Bremen - Bremen Airport (Flughafen Bremen)", "Germany", "BRE"),
  new Airport("Brescia, Montichiari", "Italy", "VBS"),
  new Airport("Brest", "France", "BES"),
  new Airport("Bria", "Central African Republic", "BIV"),
  new Airport("Bridgeport (CT)", "USA", "BDR"),
  new Airport("Bridgetown - Grantley Adams International", "Barbados", "BGI"),
  new Airport("Brindisi", "Italy", "BDS"),
  new Airport("Brisbane", "Australia", "BNE"),
  new Airport("Bristol", "United Kingdom", "BRS"),
  new Airport("Broennoeysund", "Norway", "BNN"),
  new Airport("Broken Hill", "Australia", "BHQ"),
  new Airport("Brookings (SD)", "USA", "BKX"),
  new Airport("Broome", "Australia", "BME"),
  new Airport("Brunswick (GA)", "USA", "BQK"),
  new Airport("Brussels - Brussels Airport", "Belgium", "BRU"),
  new Airport("Bucaramanga", "Colombia", "BGA"),
  new Airport("Bucharest", "Romania", "BUH"),
  new Airport("Bucharest - Henri Coandă International Airport", "Romania", "OTP"),
  new Airport("Budapest - Budapest Ferihegy International Airport", "Hungary", "BUD"),
  new Airport("Buenos Aires", "Argentina", "BUE"),
  new Airport("Buenos Aires, Ezeiza International Airport", "Argentina", "EZE"),
  new Airport("Buenos Aires, Jorge Newbery", "Argentina", "AEP"),
  new Airport("Buffalo Range", "Zimbabwe", "BFO"),
  new Airport("Buffalo/Niagara Falls (NY)", "USA", "BUF"),
  new Airport("Bujumbura - Bujumbura International Airport", "Burundi", "BJM"),
  new Airport("Bulawayo", "Zimbabwe", "BUQ"),
  new Airport("Bullhead City (NV)", "USA", "BHC"),
  new Airport("Bundaberg", "Australia", "BDB"),
  new Airport("Burbank (CA)", "USA", "BUR"),
  new Airport("Burlington IA", "USA", "BRL"),
  new Airport("Burlington (VT)", "USA", "BTV"),
  new Airport("Burnie (Wynyard)", "Australia", "BWT"),
  new Airport("Butte (MT)", "USA", "BTM"),
  new Airport("Cabinda", "Angola", "CAB"),
  new Airport("Cagliari", "Italy", "CAG"),
  new Airport("Cairns", "Australia", "CNS"),
  new Airport("Cairo - Cairo International Airport", "Egypt", "CAI"),
  new Airport("Calama - El Loa", "Chile", "CJC"),
  new Airport("Calcutta (Kolkata) - Netaji Subhas Chandra", "India", "CCU"),
  new Airport("Calgary - Calgary International Airport", "Canada", "YYC"),
  new Airport("Cali", "Colombia", "CLO"),
  new Airport("Calicut", "India", "CCJ"),
  new Airport("Calvi", "France", "CLY"),
  new Airport("Cambridge Bay", "Canada", "YCB"),
  new Airport("Cambrigde", "United Kingdom", "CBG"),
  new Airport("Campbeltown", "United Kingdom", "CAL"),
  new Airport("Campo Grande", "Brazil", "CGR"),
  new Airport("Canberra - Canberra Airport", "Australia", "CBR"),
  new Airport("Cancun", "Mexico", "CUN"),
  new Airport("Cannes – Mandelieu Airport", "France", "CEQ"),
  new Airport("Canouan (island) - Canouan Airport", "Saint Vincent & the Grenadines", "CIW"),
  new Airport("Cape Town - Cape Town International Airport", "South Africa", "CPT"),
  new Airport("Caracas - Simón Bolívar International Airport", "Venezuela", "CCS"),
  new Airport("Cardiff - Cardiff Airport", "United Kingdom", "CWL"),
  new Airport("Carlsbad (CA)", "USA", "CLD"),
  new Airport("Carnarvon", "Australia", "CVQ"),
  new Airport("Carnot", "Central African Republic", "CRF"),
  new Airport("Carson City (NV)", "USA", "CSN"),
  new Airport("Casablanca", "Morocco", "CAS"),
  new Airport("Casablanca, Mohamed V", "Morocco", "CMN"),
  new Airport("Casa de Campo - La Romana International Airport", "Dominican Republic", "LRM"),
  new Airport("Casino", "Australia", "CSI"),
  new Airport("Casper (WY)", "USA", "CPR"),
  new Airport("Castaway", "Fiji", "CST"),
  new Airport("Cartagena - Rafael Núñez International Airport", "Colombia", "CTG"),
  new Airport("Castries - George F. L. Charles Airport", "Saint Lucia", "SLU"),
  new Airport("Catania", "Italy", "CTA"),
  new Airport("Cayenne - Cayenne-Rochambeau Airport", "French Guiana", "CAY"),
  new Airport("Cottbus - Cottbus-Drewitz Airport", "Germany", "CBU"),
  new Airport("Cebu City - Mactan-Cebu International", "Philippines", "CEB"),
  new Airport("Cedar City (UT)", "USA", "CDC"),
  new Airport("Cedar Rapids IA", "USA", "CID"),
  new Airport("Ceduna", "Australia", "CED"),
  new Airport("Cessnock", "Australia", "CES"),
  new Airport("Chabarovsk (Khabarovsk)", "Russia", "KHV"),
  new Airport("Chambery", "France", "CMF"),
  new Airport("Champaign (IL)", "USA", "CMI"),
  new Airport("Chandigarh - Chandigarh International Airport", "India", "IXC"),
  new Airport("Changchun", "Jilin, PR China", "CGQ"),
  new Airport("Chania", "Greece", "CHQ"),
  new Airport("Chaoyang, Beijing - Chaoyang Airport", "PR China", "CHG"),
  new Airport("Charleston (SC)", "USA", "CHS"),
  new Airport("Charleston (WV) - Yeager Airport", "USA", "CRW"),
  new Airport("Charlotte (NC)", "USA", "CLT"),
  new Airport("Charlottesville (VA)", "USA", "CHO"),
  new Airport("Charters Towers", "Australia", "CXT"),
  new Airport("Chattanooga (TN)", "USA", "CHA"),
  new Airport("Chengdu - Shuangliu", "Sichuan, PR China", "CTU"),
  new Airport("Chennai (Madras)", "India", "MAA"),
  new Airport("Cheyenne (WY) - Cheyenne Regional Airport", "USA", "CYS"),
  new Airport("Chiang Mai - Chiang Mai International Airport", "Thailand", "CNX"),
  new Airport("Chiba City", "Japan", "QCB"),
  new Airport("Chicago (IL), Midway", "USA", "MDW"),
  new Airport("Chicago (IL), O'Hare International Airport", "USA", "ORD"),
  new Airport("Chicago (IL)", "USA", "CHI"),
  new Airport("Chichen Itza", "Mexico", "CZA"),
  new Airport("Chico (CA)", "USA", "CIC"),
  new Airport("Chihuahua - Gen Fierro Villalobos", "Mexico", "CUU"),
  new Airport("Chios", "Greece", "JKH"),
  new Airport("Chipata", "Zambia", "CIP"),
  new Airport("Chisinau - Chişinău International Airport", "Moldova", "KIV"),
  new Airport("Chita (Tschita)", "Russia", "HTA"),
  new Airport("Sapporo - New Chitose Airport", "Japan", "CTS"),
  new Airport("Chitral", "Pakistan", "CJL"),
  new Airport("Chittagong", "Bangladesh", "CGP"),
  new Airport("Chongqing - Jiangbei International Airport", "Sichuan, PR China", "CKG"),
  new Airport("Christchurch", "New Zealand", "CHC"),
  new Airport("Chub Cay", "Bahamas", "CCZ"),
  new Airport("Churchill", "Canada", "YYQ"),
  new Airport("Cienfuegos - Jaime González Airport", "Cuba", "CFG"),
  new Airport("Cincinnati (OH) - Cincinnati/Northern Kentucky Int'l", "USA", "CVG"),
  new Airport("Ciudad Del Carmen", "Mexico", "CME"),
  new Airport("Ciudad Guayana", "Venezuela", "CGU"),
  new Airport("Ciudad Juarez", "Mexico", "CJS"),
  new Airport("Ciudad Obregon", "Mexico", "CEN"),
  new Airport("Ciudad Victoria", "Mexico", "CVM"),
  new Airport("Clarksburg (WV)", "USA", "CKB"),
  new Airport("Clermont", "Australia", "CMQ"),
  new Airport("Clermont Ferrand", "France", "CFE"),
  new Airport("Cleveland (OH) , Burke Lakefront", "USA", "BKL"),
  new Airport("Cleveland (OH) - Cleveland Hopkins International", "USA", "CLE"),
  new Airport("Cochabamba", "Bolivia", "CBB"),
  new Airport("Cochin", "India", "COK"),
  new Airport("Cody/Powell/Yellowstone (WY)", "USA", "COD"),
  new Airport("Coffmann Cove (AK)", "USA", "KCC"),
  new Airport("Coffs Harbour", "Australia", "CFS"),
  new Airport("Coimbatore", "India", "CJB"),
  new Airport("Colima", "Mexico", "CLQ"),
  new Airport("College Station/Bryan (TX)", "USA", "CLL"),
  new Airport("Collinsville", "Australia", "KCE"),
  new Airport("Cologne - Cologne Airport (Flughafen Köln/Bonn)", "Germany", "CGN"),
  new Airport("Colombo - Bandaranaike International Airport", "Sri Lanka", "CMB"),
  new Airport("Colorado Springs (CO)", "USA", "COS"),
  new Airport("Columbia (SC) - Columbia Metropolitan Airport", "USA", "CAE"),
  new Airport("Columbus (GA)", "USA", "CSG"),
  new Airport("Columbus (OH) - Port Columbus International", "USA", "CMH"),
  new Airport("Conakry - Conakry International Airport", "Guinea", "CKY"),
  new Airport("Concord (CA) - Buchanan Field", "USA", "CCR"),
  new Airport("Concord (NH) - Concord Municipal Airport", "USA", "CON"),
  new Airport("Constantine", "Algeria", "CZL"),
  new Airport("Constanta (Constanța) - Constanta Int'l Airport", "Romania", "CND"),
  new Airport("Coober Pedy", "Australia", "CPD"),
  new Airport("Cooktown", "Australia", "CTN"),
  new Airport("Cooma", "Australia", "OOM"),
  new Airport("Copenhagen - Copenhagen Airport", "Denmark", "CPH"),
  new Airport("Cordoba", "Argentina", "COR"),
  new Airport("Cordoba", "Spain", "ODB"),
  new Airport("Cordova (AK)", "USA", "CDV"),
  new Airport("Corfu", "Greece", "CFU"),
  new Airport("Cork", "Ireland", "ORK"),
  new Airport("Corpus Christi (TX)", "USA", "CRP"),
  new Airport("Cotonou - Cotonou Cadjehoun Airport", "Benin", "COO"),
  new Airport("Coventry - Baginton", "United Kingdom", "CVT"),
  new Airport("Cozmel", "Mexico", "CZM"),
  new Airport("Craig (AK)", "USA", "CGA"),
  new Airport("Crescent City (CA)", "USA", "CEC"),
  new Airport("Cuiaba - Marechal Rondon International Airport", "Brazil", "CGB"),
  new Airport("Culiacan", "Mexico", "CUL"),
  new Airport("Curacao - Curaçao International Airport", "Netherlands Antilles", "CUR"),
  new Airport("Curitiba - Afonso Pena International Airport", "Brazil", "CWB"),
  new Airport("Cuyo", "Philippines", "CYU"),
  new Airport("Dakar - Léopold Sédar Senghor International Airport", "Senegal", "DKR"),
  new Airport("Dalaman", "Turkey", "DLM"),
  new Airport("Dalby", "Australia", "DBY"),
  new Airport("Dalian - Zhoushuizi International Airport", "Liaoning, PR China", "DLC"),
  new Airport("Dallas (TX) , Love Field", "USA", "DAL"),
  new Airport("Dallas/Ft. Worth (TX) - Dallas/Fort Worth International", "USA", "DFW"),
  new Airport("Daloa", "Cote d'Ivoire", "DJO"),
  new Airport("Damascus, International", "Syria", "DAM"),
  new Airport("Dammam, King Fahad International", "Saudi Arabien", "DMM"),
  new Airport("Danville (VA)", "USA", "DAN"),
  new Airport("Dar es Salam (Daressalam) - Julius Nyerere Int'l", "Tanzania", "DAR"),
  new Airport("Darwin", "Australia", "DRW"),
  new Airport("Daydream Island", "Australia", "DDI"),
  new Airport("Dayton (OH)", "USA", "DAY"),
  new Airport("Daytona Beach (FL)", "USA", "DAB"),
  new Airport("Decatur (IL)", "USA", "DEC"),
  new Airport("Deer Lake/Corner Brook", "Canada", "YDF"),
  new Airport("Delhi - Indira Gandhi International Airport", "India", "DEL"),
  new Airport("Den Haag (The Hague)", "Netherlands", "HAG"),
  new Airport("Denizli", "Turkey", "DNZ"),
  new Airport("Denpasar/Bali", "Indonesia", "DPS"),
  new Airport("Denver (CO) - Denver International Airport", "USA", "DEN"),
  new Airport("Dera Ismail Khan - Dera Ismail Khan Airport", "Pakistan", "DSK"),
  new Airport("Derby", "Australia", "DRB"),
  new Airport("Derry (Londonderry)", "United Kingdom", "LDY"),
  new Airport("Des Moines (IA) - Des Moines International Airport", "USA", "DSM"),
  new Airport("Detroit (MI) , Coleman A. Young Municipal", "USA", "DET"),
  new Airport("Detroit (MI) , Wayne County Airport", "USA", "DTW"),
  new Airport("Detroit (MI) , Metropolitan Area", "USA", "DTT"),
  new Airport("Devils Lake (ND)", "USA", "DVL"),
  new Airport("Devonport", "Australia", "DPO"),
  new Airport("Dhahran", "Saudi Arabia", "DHA"),
  new Airport("Dhaka - Zia International Airport", "Bangladesh", "DAC"),
  new Airport("Dili - Nicolau Lobato International Airport", "Timor Leste (East Timor)", "DIL"),
  new Airport("Dillingham (AK)", "USA", "DLG"),
  new Airport("Dinard", "France", "DNR"),
  new Airport("Disneyland Paris", "France", "DLP"),
  new Airport("Djerba", "Tunisia", "DJE"),
  new Airport("Djibouti (city) - Djibouti-Ambouli International Airport", "Djibouti", "JIB"),
  new Airport("Dodoma - Dodoma Airport", "Tanzania", "DOD"),
  new Airport("Doha - Doha International Airport", "Qatar", "DOH"),
  new Airport("Doncaster/Sheffield, Robin Hood International Airport", "United Kingdom", "DSA"),
  new Airport("Donegal (Carrickfin)", "Ireland", "CFN"),
  new Airport("Dortmund", "Germany", "DTM"),
  new Airport("Dothan (AL)", "USA", "DHN"),
  new Airport("Douala", "Cameroon", "DLA"),
  new Airport("Dresden - Dresden Airport", "Germany", "DRS"),
  new Airport("Dubai - Dubai International Airport", "United Arab Emirates", "DXB"),
  new Airport("Dubbo", "Australia", "DBO"),
  new Airport("Dublin - Dublin International Airport", "Ireland", "DUB"),
  new Airport("Dubois (PA)", "USA", "DUJ"),
  new Airport("Dubrovnik", "Croatia (Hrvatska)", "DBV"),
  new Airport("Dubuque IA", "USA", "DBQ"),
  new Airport("Duesseldorf - Düsseldorf International Airport", "Germany", "DUS"),
  new Airport("Duluth (MN) /Superior (WI)", "USA", "DLH"),
  new Airport("Dundee", "United Kingdom", "DND"),
  new Airport("Dunedin", "New Zealand", "DUD"),
  new Airport("Dunk Island", "Australia", "DKI"),
  new Airport("Durango (CO)", "USA", "DRO"),
  new Airport("Durban", "South Africa", "DUR"),
  new Airport("Dushanbe (Duschanbe) - Dushanbe Airport", "Tajikistan", "DYU"),
  new Airport("Dutch Harbor (AK)", "USA", "DUT"),
  new Airport("Dysart", "Australia", "DYA"),
  new Airport("Dzaoudzi", "Mayotte", "DZA"),
  new Airport("East London", "South Africa", "ELS"),
  new Airport("Easter Island", "Chile", "IPC"),
  new Airport("Eau Clarie (WI)", "USA", "EAU"),
  new Airport("Edinburgh - Edinburgh Airport", "Scotland, UK", "EDI"),
  new Airport("Edmonton", "Canada", "YEA"),
  new Airport("Edmonton, International", "Canada", "YEG"),
  new Airport("Edmonton, Municipal", "Canada", "YXD"),
  new Airport("Egilsstadir", "Iceland", "EGS"),
  new Airport("Eindhoven", "Netherlands", "EIN"),
  new Airport("Samana - Samaná El Catey International Airport", "Dominican Republic", "AZS"),
  new Airport("Elba Island, Marina Di Campo", "Italy", "EBA"),
  new Airport("Elat", "Israel", "ETH"),
  new Airport("Elat, Ovula", "Israel", "VDA"),
  new Airport("Elkhart (IN)", "USA", "EKI"),
  new Airport("Elko (NV)", "USA", "EKO"),
  new Airport("Ellisras", "South Africa", "ELL"),
  new Airport("El Minya", "Egypt", "EMY"),
  new Airport("Elmira (NY)", "USA", "ELM"),
  new Airport("El Paso (TX) - El Paso International Airport", "USA", "ELP"),
  new Airport("Ely (NV)", "USA", "ELY"),
  new Airport("Emerald", "Australia", "EDR"),
  new Airport("Emerald", "Australia", "EMD"),
  new Airport("Enontekioe", "Finland", "ENF"),
  new Airport("Entebbe - Entebbe International Airport", "Uganda", "EBB"),
  new Airport("Erfurt - Erfurt Airport (Flughafen Erfurt)", "Germany", "ERF"),
  new Airport("Erie (PA)", "USA", "ERI"),
  new Airport("Eriwan (Yerevan, Jerevan)", "Armenia", "EVN"),
  new Airport("Erzincan", "Turkey", "ERC"),
  new Airport("Erzurum", "Turkey", "ERZ"),
  new Airport("Esbjerg", "Denmark", "EBJ"),
  new Airport("Escanaba (MI)", "USA", "ESC"),
  new Airport("Esperance", "Australia", "EPR"),
  new Airport("Eugene (OR)", "USA", "EUG"),
  new Airport("Eureka (CA)", "USA", "ACV"),
  new Airport("Evansville (IN)", "USA", "EVV"),
  new Airport("Evenes", "Norway", "EVE"),
  new Airport("Exeter", "United Kingdom", "EXT"),
  new Airport("Fairbanks (AK)", "USA", "FAI"),
  new Airport("Fair Isle (Shetland)", "United Kingdom", "FIE"),
  new Airport("Faisalabad", "Pakistan", "LYP"),
  new Airport("Fargo (ND) (MN)", "USA", "FAR"),
  new Airport("Farmington (NM)", "USA", "FMN"),
  new Airport("Faro", "Portugal", "FAO"),
  new Airport("Faroer - Vágar Airport", "Denmark", "FAE"),
  new Airport("Fayetteville (AR)", "USA", "FYV"),
  new Airport("Fayetteville/Ft. Bragg (NC)", "USA", "FAY"),
  new Airport("Fes", "Morocco", "FEZ"),
  new Airport("Figari", "France", "FSC"),
  new Airport("Flagstaff (AZ)", "USA", "FLG"),
  new Airport("Flin Flon", "Canada", "YFO"),
  new Airport("Flint (MI)", "USA", "FNT"),
  new Airport("Florence (Firenze) - Peretola Airport", "Italy", "FLR"),
  new Airport("Florence (SC)", "USA", "FLO"),
  new Airport("Florianopolis", "Brazil", "FLN"),
  new Airport("Floro", "Norway", "FRO"),
  new Airport("Fort Albert", "Canada", "YFA"),
  new Airport("Fortaleza - Pinto Martins Airport", "Brazil", "FOR"),
  new Airport("Fort de France - Martinique Aimé Césaire International", "Martinique", "FDF"),
  new Airport("Fort Dodge IA", "USA", "FOD"),
  new Airport("Fort Huachuca/Sierra Vista (AZ)", "USA", "FHU"),
  new Airport("Fort Lauderdale/Hollywood (FL)", "USA", "FLL"),
  new Airport("Fort McMurray", "Canada", "YMM"),
  new Airport("Fort Myers, Metropolitan Area (FL)", "USA", "FMY"),
  new Airport("Fort Myers, Southwest Florida Reg (FL)", "USA", "RSW"),
  new Airport("Fort Riley (KS) - Marshall AAF", "USA", "FRI"),
  new Airport("Fort Smith", "Canada", "YSM"),
  new Airport("Fort Smith (AR)", "USA", "FSM"),
  new Airport("Fort St. John", "Canada", "YXJ"),
  new Airport("Fort Walton Beach (FL)", "USA", "VPS"),
  new Airport("Fort Wayne (IN)", "USA", "FWA"),
  new Airport("Fort Worth (TX) - Dallas/Fort Worth International Airport", "USA", "DFW"),
  new Airport("Foula (Shetland)", "United Kingdom", "FOU"),
  new Airport("Francistown", "Botswana", "FRW"),
  new Airport("Frankfurt/Main - Frankfurt Airport (Rhein-Main-Flughafen)", "Germany", "FRA"),
  new Airport("Frankfurt/Hahn", "Germany", "HHN"),
  new Airport("Franklin/Oil City (PA)", "USA", "FKL"),
  new Airport("Fredericton", "Canada", "YFC"),
  new Airport("Freeport - Grand Bahama International Airport", "Bahamas", "FPO"),
  new Airport("Freetown - Freetown-Lungi International Airport", "Sierra Leone", "FNA"),
  new Airport("Frejus", "France", "FRJ"),
  new Airport("Fresno (CA)", "USA", "FAT"),
  new Airport("Friedrichshafen - Bodensee-Airport Friedrichshafen", "Germany", "FDH"),
  new Airport("Fuerteventura", "Spain", "FUE"),
  new Airport("Fujairah, International Airport", "United Arab Emirates", "FJR"),
  new Airport("Fukuoka", "Japan", "FUK"),
  new Airport("Fukushima - Fukushima Airport", "Japan", "FKS"),
  new Airport("Funchal", "Portugal", "FNC"),
  new Airport("Futuna", "Wallis and Futuna Islands", "FUT"),
  new Airport("Gaborone - Sir Seretse Khama International Airport", "Botswana", "GBE"),
  new Airport("Gadsden (AL)", "USA", "GAD"),
  new Airport("Gainesville (FL)", "USA", "GNV"),
  new Airport("Galway", "Ireland", "GWY"),
  new Airport("Gander", "Canada", "YQX"),
  new Airport("Garoua", "Cameroon", "GOU"),
  new Airport("Gaza City - Gaza International Airport", "Palestinian Territory", "GZA"),
  new Airport("Gaziantep", "Turkey", "GZT"),
  new Airport("Gdansk", "Poland", "GDN"),
  new Airport("Geelong", "Australia", "GEX"),
  new Airport("Geneva - Geneva-Cointrin International Airport", "Switzerland", "GVA"),
  new Airport("Genoa", "Italy", "GOA"),
  new Airport("George", "South Africa", "GRJ"),
  new Airport("Georgetown - Cheddi Jagan International Airport", "Guyana", "GEO"),
  new Airport("Geraldton", "Australia", "GET"),
  new Airport("Gerona", "Spain", "GRO"),
  new Airport("Ghent (Gent)", "Belgium", "GNE"),
  new Airport("Gibraltar", "Gibraltar", "GIB"),
  new Airport("Gilette (WY)", "USA", "GCC"),
  new Airport("Gilgit", "Pakistan", "GIL"),
  new Airport("Gillam", "Canada", "YGX"),
  new Airport("Gladstone", "Australia", "GLT"),
  new Airport("Glasgow, Prestwick", "United Kingdom", "PIK"),
  new Airport("Glasgow", "United Kingdom", "GLA"),
  new Airport("Glasgow (MT)", "USA", "GGW"),
  new Airport("Glendive (MT)", "USA", "GDV"),
  new Airport("Goa", "India", "GOI"),
  new Airport("Goiania, Santa Genoveva Airport", "Brazil", "GYN"),
  new Airport("Gold Coast", "Australia", "OOL"),
  new Airport("Goondiwindi", "Australia", "GOO"),
  new Airport("Goose Bay", "Canada", "YYR"),
  new Airport("Gorna", "Bulgaria", "GOZ"),
  new Airport("Gothenburg (Göteborg) - Landvetter", "Sweden", "GOT"),
  new Airport("Gove (Nhulunbuy)", "Australia", "GOV"),
  new Airport("Govenors Harbour", "Bahamas", "GHB"),
  new Airport("Granada", "Spain", "GRX"),
  new Airport("Grand Bahama International", "Bahamas", "FPO"),
  new Airport("Grand Canyon (AZ)", "USA", "GCN"),
  new Airport("Grand Cayman - Owen Roberts International", "Cayman Islands", "GCM"),
  new Airport("Grand Forks (ND)", "USA", "GFK"),
  new Airport("Grand Junction (CO)", "USA", "GJT"),
  new Airport("Grand Rapids (MI)", "USA", "GRR"),
  new Airport("Grand Rapids (MN)", "USA", "GPZ"),
  new Airport("Graz", "Austria", "GRZ"),
  new Airport("Great Falls (MT)", "USA", "GTF"),
  new Airport("Great Keppel Island", "Australia", "GKL"),
  new Airport("Green Bay (WI)", "USA", "GRB"),
  new Airport("Greenbrier/Lewisburg (WV)", "USA", "LWB"),
  new Airport("Greensboro/Winston Salem (NC)", "USA", "GSO"),
  new Airport("Greenville (MS)", "USA", "GLH"),
  new Airport("Greenville (NC)", "USA", "PGV"),
  new Airport("Greenville/Spartanburg (SC)", "USA", "GSP"),
  new Airport("Grenada - Point Salines Airport also Maurice Bishop", "Grenada", "GND"),
  new Airport("Grenoble", "France", "GNB"),
  new Airport("Griffith", "Australia", "GFF"),
  new Airport("Groningen - Eelde", "Netherlands", "GRQ"),
  new Airport("Groote Eylandt - Alyangula", "Australia", "GTE"),
  new Airport("Groton/New London (CT)", "USA", "GON"),
  new Airport("Guadalajara", "Mexico", "GDL"),
  new Airport("Guadalcanal", "Solomon Islands", "GSI"),
  new Airport("Guam", "Guam", "GUM"),
  new Airport("Guangzhou (Canton) - Baiyun International Airport", "Guangdong, PR China", "CAN"),
  new Airport("Sao Paulo - Guarulhos International", "Brazil", "GRU"),
  new Airport("Guatemala City - La Aurora International Airport", "Guatemala", "GUA"),
  new Airport("Guayaquil - Simon Bolivar", "Ecuador", "GYE"),
  new Airport("Guernsey", "Channel Islands", "GCI"),
  new Airport("Guettin", "Germany", "GTI"),
  new Airport("Gulfport/Biloxi (MS)", "USA", "GPT"),
  new Airport("Guilin - Liangjiang", "Guangxi, PR China", "KWL"),
  new Airport("Gulu", "Uganda", "ULU"),
  new Airport("Gunnison/Crested Butte (CO)", "USA", "GUC"),
  new Airport("Guwahati", "India", "GAU"),
  new Airport("Gwadar", "Pakistan", "GWD"),
  new Airport("Gweru", "Zimbabwe", "GWE"),
  new Airport("Gympie", "Australia", "GYP"),
  new Airport("Hachijo Jima", "Japan", "HAC"),
  new Airport("Hagåtña - Guam International Airport", "Guam", "GUM"),
  new Airport("Haifa", "Israel", "HFA"),
  new Airport("Haines (AK)", "USA", "HNS"),
  new Airport("Hakodate", "Japan", "HKD"),
  new Airport("Halifax International", "Canada", "YHZ"),
  new Airport("Hall Beach", "Canada", "YUX"),
  new Airport("Hamburg - Fuhlsbuettel", "Germany", "HAM"),
  new Airport("Hamilton", "Australia", "HLT"),
  new Airport("Hamilton", "Canada", "YHM"),
  new Airport("Hamilton", "New Zealand", "HLZ"),
  new Airport("Hamilton Island", "Australia", "HTI"),
  new Airport("Hammerfest", "Norway", "HFT"),
  new Airport("Hancock (MI)", "USA", "CMX"),
  new Airport("Hangchow (Hangzhou)", "Zhejiang, PR China", "HGH"),
  new Airport("Hannover", "Germany", "HAJ"),
  new Airport("Hanoi - Noi Bai International Airport", "Vietnam", "HAN"),
  new Airport("Harare - Harare International Airport", "Zimbabwe", "HRE"),
  new Airport("Harbin (Haerbin)", "Heilongjiang, PR China", "HRB"),
  new Airport("Harlingen/South Padre Island (TX)", "USA", "HRL"),
  new Airport("Harrington Harbour, PQ", "Canada", "YHR"),
  new Airport("Harrisburg (PA) - Harrisburg Skyport", "USA", "HAR"),
  new Airport("Harrisburg (PA) - Harrisburg International", "USA", "MDT"),
  new Airport("Hartford (CT) /Springfield (MA)", "USA", "BDL"),
  new Airport("Hatyai (Hat Yai)", "Thailand", "HDY"),
  new Airport("Haugesund", "Norway", "HAU"),
  new Airport("Havana - José Martí International", "Cuba", "HAV"),
  new Airport("Havre (MT)", "USA", "HVR"),
  new Airport("Hayman Island", "Australia", "HIS"),
  new Airport("Helena (MT)", "USA", "HLN"),
  new Airport("Helsingborg", "Sweden", "JHE"),
  new Airport("Helsinki - Vantaa", "Finland", "HEL"),
  new Airport("Heraklion", "Greece", "HER"),
  new Airport("Hermosillo - Gen. Pesqueira Garcia", "Mexico", "HMO"),
  new Airport("Hervey Bay", "Australia", "HVB"),
  new Airport("Hibbing (MN)", "USA", "HIB"),
  new Airport("Hickory (NC)", "USA", "HKY"),
  new Airport("Hilo (HI)", "USA", "ITO"),
  new Airport("Hilton Head Island (SC)", "USA", "HHH"),
  new Airport("Hinchinbrook Island", "Australia", "HNK"),
  new Airport("Hiroshima International", "Japan", "HIJ"),
  new Airport("Ho Chi Minh City (Saigon) - Tan Son Nhat International", "Viet Nam", "SGN"),
  new Airport("Hobart", "Australia", "HBA"),
  new Airport("Hof", "Germany", "HOQ"),
  new Airport("Holguin", "Cuba", "HOG"),
  new Airport("Home Hill", "Australia", "HMH"),
  new Airport("Homer (AK)", "USA", "HOM"),
  new Airport("Hong Kong - International Airport (HKIA)", "Hong Kong", "HKG"),
  new Airport("Hong Kong - Chek Lap Kok", "Hong Kong", "ZJK"),
  new Airport("Honiara Henderson International", "Solomon Islands", "HIR"),
  new Airport("Honolulu (HI) - Honolulu International Airport", "USA", "HNL"),
  new Airport("Hoonah (AK)", "USA", "HNH"),
  new Airport("Horta", "Portugal", "HOR"),
  new Airport("Houston (TX) , Hobby", "USA", "HOU"),
  new Airport("Houston, TX - George Bush Intercontinental Airport", "USA", "IAH"),
  new Airport("Huahine", "French Polynesia", "HUH"),
  new Airport("Huatulco", "Mexico", "HUX"),
  new Airport("Hue - Phu Bai", "Viet Nam", "HUI"),
  new Airport("Humberside", "United Kingdom", "HUY"),
  new Airport("Huntington (WV)", "USA", "HTS"),
  new Airport("Huntsville (AL)", "USA", "HSV"),
  new Airport("Hurghada International", "Egypt", "HRG"),
  new Airport("Huron (SD)", "USA", "HON"),
  new Airport("Hwange National Park", "Zimbabwe", "HWN"),
  new Airport("Hyannis (MA)", "USA", "HYA"),
  new Airport("Hydaburg (AK)", "USA", "HYG"),
  new Airport("Hyderabad - Rajiv Gandhi International Airport", "India", "HYD"),
  new Airport("Hyderabad", "Pakistan", "HDD"),
  new Airport("Ibiza", "Ibiza/Spain", "IBZ"),
  new Airport("Idaho Falls (ID)", "USA", "IDA"),
  new Airport("Iguazu, Cataratas", "Argentina", "IGR"),
  new Airport("Ile des Pins", "New Caledonia", "ILP"),
  new Airport("Ile Ouen", "New Caledonia", "IOU"),
  new Airport("Iliamna (AK)", "USA", "ILI"),
  new Airport("Imperial (CA)", "USA", "IPL"),
  new Airport("Incercargill", "New Zealand", "IVC"),
  new Airport("Incheon, Incheon International Airport", "Korea South", "ICN"),
  new Airport("Indianapolis (IN) International", "USA", "IND"),
  new Airport("Ingham", "Australia", "IGH"),
  new Airport("Innisfail", "Australia", "IFL"),
  new Airport("Innsbruck - Kranebitten", "Austria", "INN"),
  new Airport("International Falls (MN)", "USA", "INL"),
  new Airport("Inuvik", "Canada", "YEV"),
  new Airport("Invercargill", "New Zealand", "IVC"),
  new Airport("Inverness", "United Kingdom", "INV"),
  new Airport("Inykern (CA)", "USA", "IYK"),
  new Airport("Iqaluit (Frobisher Bay)", "Canada", "YFB"),
  new Airport("Iquitos", "Peru", "IQT"),
  new Airport("Irkutsk", "Russia", "IKT"),
  new Airport("Ishigaki - New Ishigaki Airport", "Japan", "ISG"),
  new Airport("Islamabad - Benazir Bhutto International Airport", "Pakistan", "ISB"),
  new Airport("Islay", "United Kingdom", "ILY"),
  new Airport("Isle of Man", " ", "IOM"),
  new Airport("Istanbul - Istanbul Atatürk Airport", "Turkey", "IST"),
  new Airport("Istanbul - Sabiha Gokcen", "Turkey", "SAW"),
  new Airport("Ithaca/Cortland (NY)", "USA", "ITH"),
  new Airport("Ivalo", "Finland", "IVL"),
  new Airport("Ixtapa/Zihuatenejo", "Mexico", "ZIH"),
  new Airport("Izmir", "Turkey", "IZM"),
  new Airport("Izmir - Adnan Menderes Airport", "Turkey", "ADB"),
  new Airport("Jackson Hole (WY)", "USA", "JAC"),
  new Airport("Jackson (MI) - Reynolds Municipal", "USA", "JXN"),
  new Airport("Jackson,  MN  ", "USA", "MJQ"),
  new Airport("Jackson (MS) - Jackson Internationall", "USA", "JAN"),
  new Airport("Jackson (MS) - Hawkins Field   ", "USA", "HKS"),
  new Airport("Jackson (TN) - Mckellar", "USA", "MKL"),
  new Airport("Jackson Hole (WY)", "USA", "JAC"),
  new Airport("Jacksonville (AR)  Little Rock AFB   ", "USA", "LRF"),
  new Airport("Jacksonville (FL) - Cecil Field NAS   ", "USA", "NZC"),
  new Airport("Jacksonville (FL) Jacksonville NAS   ", "USA", "NIP"),
  new Airport("Jacksonville (FL) - International", "USA", "JAX"),
  new Airport("Jacksonville (FL) - Craig Municipal   ", "USA", "CRG"),
  new Airport("Jacksonville (IL) - Municipal Airport", "USA", "IJX"),
  new Airport("Jacksonville (NC)", "USA", "OAJ"),
  new Airport("Jacksonville (TX)", "USA", "JKV"),
  new Airport("Jacmel   ", "Haiti", "JAK"),
  new Airport("Jacobabad", "Pakistan", "JAG"),
  new Airport("Jacobina   ", "Brazil", "JCM"),
  new Airport("Jacquinot Bay", "Papua New Guinea", "JAQ"),
  new Airport("Jaffna - Kankesanturai", "Sri Lanka", "JAF"),
  new Airport("Jagdalpur", "India", "JGB"),
  new Airport("Jaipur - Sanganeer", "India", "JAI"),
  new Airport("Jaisalmer   ", "India", "JSA"),
  new Airport("Jakarta - Halim Perdana Kusuma", "Indonesia", "HLP"),
  new Airport("Jakarta - Metropolitan Area", "Indonesia", "JKT"),
  new Airport("Jakarta - Soekarno-Hatta International", "Indonesia", "CGK"),
  new Airport("Jalalabad    ", "Afghanistan", "JAA"),
  new Airport("Jalandhar", "India", "JLR"),
  new Airport("Jalapa", "Mexico", "JAL"),
  new Airport("Jales", "Brazil", "JLS"),
  new Airport("Jaluit Island  ", "Marshall Islands", "UIT"),
  new Airport("Jamba", "Angola", "JMB"),
  new Airport("Jambi - Sultan Taha Syarifudn", "Indonesia ", "DJB"),
  new Airport("Jambol", "Bulgaria", "JAM"),
  new Airport("Jamestown (ND)", "USA", "JMS"),
  new Airport("Jamestown (NY)", "USA", "JHW"),
  new Airport("Jammu - Satwari", "India", "IXJ"),
  new Airport("Jamnagar - Govardhanpur", "India", "JGA"),
  new Airport("Jamshedpur - Sonari Airport", "India", "IXW"),
  new Airport("Janakpur", "Nepal", "JKR"),
  new Airport("Jandakot", "Australia", "JAD"),
  new Airport("Janesville (WI) - Rock County", "USA", "JVL"),
  new Airport("Januaria", "Brazil", "JNA"),
  new Airport("Jaque   ", "Panama", "JQE"),
  new Airport("Jatai", "Brazil", "JTI"),
  new Airport("Jauja", "Peru", "JAU"),
  new Airport("Jayapura - Sentani", "Indonesia", "DJJ"),
  new Airport("Jeddah - King Abdulaziz International", "Saudi Arabia", "JED"),
  new Airport("Jefferson City (MO) - Jefferson Memorial", "USA", "JEF"),
  new Airport("Jeremie - Jeremie Airport", "Haiti", "JEE"),
  new Airport("Jerez de la Frontera/Cadiz - La Parra", "Spain", "XRY"),
  new Airport("Jersey", "Channel Islands", "JER"),
  new Airport("Jerusalem - Atarot Airport (closed)", "Israel", "JRS"),
  new Airport("Jessore - Jessore Airport", "Bangladesh", "JSR"),
  new Airport("Jeypore - Jeypore Airport", "India", "PYB"),
  new Airport("Ji'an", "Jiangxi, China", "JGS"),
  new Airport("Jiamusi - Jiamusi Airport", "PR China", "JMU"),
  new Airport("Jiayuguan - Jiayuguan Airport", "PR China", "JGN"),
  new Airport("Jijel", "Algeria", "GJL"),
  new Airport("Jijiga", "Ethiopia", "JIJ"),
  new Airport("Jilin", "PR China", "JIL"),
  new Airport("Jimma", "Ethiopia", "JIM"),
  new Airport("Jinan", "Shandong, PR China", "TNA"),
  new Airport("Jingdezhen", "PR China", "JDZ"),
  new Airport("Jinghong - Gasa Airport", "PR China", "JHG"),
  new Airport("Jining", "PR China", "JNG"),
  new Airport("Jinja", "Uganda", "JIN"),
  new Airport("Jinjiang", "PR China", "JJN"),
  new Airport("Jinka - Baco/Jinka Airport", "Ethiopia", "BCO"),
  new Airport("Jinzhou - Jinzhou Airport", "PR China", "JNZ"),
  new Airport("Jipijapa", "Ecuador", "JIP"),
  new Airport("Jiri", "Nepal", "JIR"),
  new Airport("Jiujiang - Jiujiang Lushan Airport", "PR China", "JIU"),
  new Airport("Jiwani", "Pakistan", "JIW"),
  new Airport("Joacaba", "Brazil", "JCB"),
  new Airport("Joao Pessoa - Castro Pinto Airport", "Brazil", "JPA"),
  new Airport("Jodhpur", "India", "JDH"),
  new Airport("Jönköping (Jonkoping) - Axamo Airport", "Sweden", "JKG"),
  new Airport("Joensuu", "Finland", "JOE"),
  new Airport("Johannesburg - OR Tambo International Airport", "South Africa", "JNB"),
  new Airport("Johnson City (NY) - Binghamton/Endicott/Johnson", "USA", "BGM"),
  new Airport("Johnston Island", "USA", "JON"),
  new Airport("Johnstown (PA)", "USA", "JST"),
  new Airport("Johor Bahru - Sultan Ismail International", "Malaysia", "JHB"),
  new Airport("Joinville - Cubatao Airport", "Brazil", "JOI"),
  new Airport("Jolo", "Philippines", "JOL"),
  new Airport("Jomsom", "Nepal", "JMO"),
  new Airport("Jonesboro (AR)  Jonesboro Airport", "USA", "JBR"),
  new Airport("Joplin (MO)", "USA", "JLN"),
  new Airport("Jorhat - Rowriah Airport", "India", "JRH"),
  new Airport("Jos", "Nigeria", "JOS"),
  new Airport("Jose De San Martin", "Argentina", "JSM"),
  new Airport("Jouf", "Saudi Arabia", "AJF"),
  new Airport("Juanjui", "Peru", "JJI"),
  new Airport("Juba", "South Sudan", "JUB"),
  new Airport("Juist (island)", "Germany", "JUI"),
  new Airport("Juiz De Fora - Francisco De Assis Airport", "Brazil", "JDF"),
  new Airport("Jujuy - El Cadillal Airport", "Argentina", "JUJ"),
  new Airport("Julia Creek", "Australia", "JCK"),
  new Airport("Juliaca", "Peru", "JUL"),
  new Airport("Jumla", "Nepal", "JUM"),
  new Airport("Jundah", "Australia", "JUN"),
  new Airport("Juneau (AK) - Juneau International Airport", "USA", "JNU"),
  new Airport("Junin", "Argentina", "JNI"),
  new Airport("Juticalpa", "Honduras", "JUT"),
  new Airport("Jwaneng", "Botswana", "JWA"),
  new Airport("Jyväskylä (Jyvaskyla)", "Finland", "JYV"),
  new Airport("Kabul - Khwaja Rawash Airport", "Afghanistan", "KBL"),
  new Airport("Kagoshima", "Japan", "KOJ"),
  new Airport("Kahramanmaras", "Turkey", "KCM"),
  new Airport("Kahului (HI)", "USA", "OGG"),
  new Airport("Kajaani", "Finland", "KAJ"),
  new Airport("Kalamata", "Greece", "KLX"),
  new Airport("Kalamazoo/Battle Creek (MI)", "USA", "AZO"),
  new Airport("Kalgoorlie", "Australia", "KGI"),
  new Airport("Kaliningrad", "Russia", "KGD"),
  new Airport("Kalispell (MT)", "USA", "FCA"),
  new Airport("Kalmar", "Sweden", "KLR"),
  new Airport("Kamloops, BC", "Canada", "YKA"),
  new Airport("Kamuela (HI)", "USA", "MUE"),
  new Airport("Kano", "Nigeria", "KAN"),
  new Airport("Kanpur", "India", "KNU"),
  new Airport("Kansas City (MO) - Kansas City International Airport", "USA", "MCI"),
  new Airport("Kaohsiung International", "Taiwan", "KHH"),
  new Airport("Kapalua West (HI)", "USA", "JHM"),
  new Airport("Karachi - Jinnah International Airport", "Pakistan", "KHI"),
  new Airport("Karlsruhe-Baden - Soellingen", "Germany", "FKB"),
  new Airport("Karlstad", "Sweden", "KSD"),
  new Airport("Karpathos", "Greece", "AOK"),
  new Airport("Karratha", "Australia", "KTA"),
  new Airport("Kars", "Turkey", "KYS"),
  new Airport("Karumba", "Australia", "KRB"),
  new Airport("Karup", "Denmark", "KRP"),
  new Airport("Kaschechawan, PQ", "Canada", "ZKE"),
  new Airport("Kassala", "Sudan", "KSL"),
  new Airport("Katherine", "Australia", "KTR"),
  new Airport("Kathmandu - Tribhuvan International Airport", "Nepal", "KTM"),
  new Airport("Katima Mulilo/Mpacha", "Namibia", "MPA"),
  new Airport("Kauhajoki", "Finland", "KHJ"),
  new Airport("Kaunakakai (HI)", "USA", "MKK"),
  new Airport("Kavalla", "Greece", "KVA"),
  new Airport("Kayseri", "Turkey", "ASR"),
  new Airport("Kazan - Kazan International Airport", "Russia", "KZN"),
  new Airport("Keetmanshoop", "Namibia", "KMP"),
  new Airport("Kelowna, BC", "Canada", "YLW"),
  new Airport("Kemi/Tornio", "Finland", "KEM"),
  new Airport("Kenai (AK)", "USA", "ENA"),
  new Airport("Kent (Manston) Kent International", "United Kingdom", "MSE"),
  new Airport("Kerry County", "Ireland", "KIR"),
  new Airport("Ketchikan (AK)", "USA", "KTN"),
  new Airport("Key West (FL)", "USA", "EYW"),
  new Airport("Khamis Mushayat", "Saudi Arabia", "AHB"),
  new Airport("Kharga - New Valley", "Egypt", "UVL"),
  new Airport("Kharkov", "Ukraine", "HRK"),
  new Airport("Khartoum - Khartoum International Airport", "Sudan", "KRT"),
  new Airport("Khuzdar", "Pakistan", "KDD"),
  new Airport("Kiel - Holtenau", "Germany", "KEL"),
  new Airport("Kiev - Borispol", "Ukraine", "KBP"),
  new Airport("Kiev - Zhulhany", "Ukraine", "IEV"),
  new Airport("Kigali - Gregoire Kayibanda", "Rwanda", "KGL"),
  new Airport("Kilimadjaro", "Tanzania", "JRO"),
  new Airport("Killeem (TX)", "USA", "ILE"),
  new Airport("Kimberley", "South Africa", "KIM"),
  new Airport("King Island", "King Island (Australia)", "KNS"),
  new Airport("King Salomon (AK)", "USA", "AKN"),
  new Airport("Kingscote", "Australia", "KGC"),
  new Airport("Kingston - Norman Manley", "Jamaica", "KIN"),
  new Airport("Kingston (NC)", "USA", "ISO"),
  new Airport("Kingstown - E. T. Joshua Airport", "Saint Vincent and the Grenadines", "SVD"),
  new Airport("Kinshasa - N'Djili", "Congo (DRC)", "FIH"),
  new Airport("Kiritimati (island) - Cassidy International Airport", "Kiribati", "CXI"),
  new Airport("Kirkenes", "Norway", "KKN"),
  new Airport("Kirkuk", "Iraq", "KIK"),
  new Airport("Kirkwall (Orkney)", "United Kingdom", "KOI"),
  new Airport("Kiruna", "Sweden", "KRN"),
  new Airport("Kisangani", "Congo (DRC)", "FKI"),
  new Airport("Kittilä", "Finland", "KTT"),
  new Airport("Kitwe", "Zambia", "KIW"),
  new Airport("Klagenfurt", "Austria", "KLU"),
  new Airport("Klamath Fall (OR)", "USA", "LMT"),
  new Airport("Klawock (AK)", "USA", "KLW"),
  new Airport("Kleinsee", "South Africa", "KLZ"),
  new Airport("Knock", "Ireland", "NOC"),
  new Airport("Knoxville (TN)", "USA", "TYS"),
  new Airport("Kobe", "Japan", "UKB"),
  new Airport("Kochi", "Japan", "KCZ"),
  new Airport("Köln, Köln/Bonn", "Germany", "CGN"),
  new Airport("Kodiak (AK)", "USA", "ADQ"),
  new Airport("Kohat", "Pakistan", "OHT"),
  new Airport("Kokkola/Pietarsaari", "Finland", "KOK"),
  new Airport("Kolkata (Calcutta) - Netaji Subhas Chandra", "India", "CCU"),
  new Airport("Komatsu", "Japan", "KMQ"),
  new Airport("Kona (HI)", "USA", "KOA"),
  new Airport("Konya", "Turkey", "KYA"),
  new Airport("Korhogo", "Cote d'Ivoire", "HGO"),
  new Airport("Kos", "Greece", "KGS"),
  new Airport("Kota Kinabalu", "Malaysia", "BKI"),
  new Airport("Kotzbue (AK)", "USA", "OTZ"),
  new Airport("Kowanyama", "Australia", "KWM"),
  new Airport("Krakow (Cracow) - John Paul II International Airport", "Poland", "KRK"),
  new Airport("Kristiansand", "Norway", "KRS"),
  new Airport("Kristianstad", "Sweden", "KID"),
  new Airport("Kristiansund", "Norway", "KSU"),
  new Airport("Kuala Lumpur - International Airport", "Malaysia", "KUL"),
  new Airport("Kuala Lumpur - Sultan Abdul Aziz Shah", "Malaysia", "SZB"),
  new Airport("Kuantan", "Malaysia", "KUA"),
  new Airport("Kuching", "Malaysia", "KCH"),
  new Airport("Kumamoto", "Japan", "KMJ"),
  new Airport("Kununurra", "Australia", "KNX"),
  new Airport("Kuopio", "Finland", "KUO"),
  new Airport("Kushiro", "Japan", "KUH"),
  new Airport("Kuujjuaq (FortChimo)", "Canada", "YVP"),
  new Airport("Kuujjuarapik", "Canada", "YGW"),
  new Airport("Kuusamo", "Finland", "KAO"),
  new Airport("Kuwait - Kuwait International", "Kuwait", "KWI"),
  new Airport("Kyoto", "Japan", "UKY"),
  new Airport("Labe", "Guinea", "LEK"),
  new Airport("Labouchere Bay (AK)", "USA", "WLB"),
  new Airport("Labuan", "Malaysia", "LBU"),
  new Airport("Lac Brochet, MB", "Canada", "XLB"),
  new Airport("La Coruna", "Spain", "LCG"),
  new Airport("La Crosse (WI)", "USA", "LSE"),
  new Airport("Lae - Lae Nadzab Airport", "Papua New Guinea", "LAE"),
  new Airport("La Rochelle", "France", "LRH"),
  new Airport("Lafayette (IN)", "USA", "LAF"),
  new Airport("Lafayette, La", "USA", "LFT"),
  new Airport("Lagos - Murtala Muhammed Airport", "Nigeria", "LOS"),
  new Airport("La Grande", "Canada", "YGL"),
  new Airport("Lahore", "Pakistan", "LHE"),
  new Airport("Lake Charles (LA)", "USA", "LCH"),
  new Airport("Lake Havasu City (AZ)", "USA", "HII"),
  new Airport("Lake Tahoe (CA)", "USA", "TVL"),
  new Airport("Lakselv", "Norway", "LKL"),
  new Airport("Lambarene", "Gabon", "LBQ"),
  new Airport("Lamezia Terme", "Italy", "SUF"),
  new Airport("Lampedusa", "Italy", "LMP"),
  new Airport("Lanai City (HI)", "USA", "LNY"),
  new Airport("Lancaster (PA)", "USA", "LNS"),
  new Airport("Land's End", "United Kingdom", "LEQ"),
  new Airport("Langkawi (islands)", "Malaysia", "LGK"),
  new Airport("Lannion", "France", "LAI"),
  new Airport("Lanseria", "South Africa", "HLA"),
  new Airport("Lansing (MI)", "USA", "LAN"),
  new Airport("La Paz - El Alto", "Bolivia", "LPB"),
  new Airport("La Paz - Leon", "Mexico", "LAP"),
  new Airport("Lappeenranta", "Finland", "LPP"),
  new Airport("Laramie (WY)", "USA", "LAR"),
  new Airport("Laredo (TX)", "USA", "LRD"),
  new Airport("Larnaca", "Cyprus", "LCA"),
  new Airport("Las Palmas", "Spain", "LPA"),
  new Airport("Las Vegas (NV)", "USA", "LAS"),
  new Airport("Latrobe (PA)", "USA", "LBE"),
  new Airport("Launceston", "Australia", "LST"),
  new Airport("Laurel/Hattisburg (MS)", "USA", "PIB"),
  new Airport("Laverton", "Australia", "LVO"),
  new Airport("Lawton (OK)", "USA", "LAW"),
  new Airport("Lazaro Cardenas", "Mexico", "LZC"),
  new Airport("Leaf Rapids", "Canada", "YLR"),
  new Airport("Learmouth (Exmouth)", "Australia", "LEA"),
  new Airport("Lebanon (NH)", "USA", "LEB"),
  new Airport("Leeds/Bradford", "United Kingdom", "LBA"),
  new Airport("Leinster", "Australia", "LER"),
  new Airport("Leipzig", "Germany", "LEJ"),
  new Airport("Lelystad", "Netherlands", "LEY"),
  new Airport("Leon", "Mexico", "BJX"),
  new Airport("Leonora", "Australia", "LNO"),
  new Airport("Lerwick/Tingwall (Shetland Islands)", "United Kingdom", "LWK"),
  new Airport("Lewiston (ID)", "USA", "LWS"),
  new Airport("Lewistown (MT)", "USA", "LWT"),
  new Airport("Lexington (KY)", "USA", "LEX"),
  new Airport("Libreville", "Gabon", "LBV"),
  new Airport("Lidkoeping", "Sweden", "LDK"),
  new Airport("Liege", "Belgium", "LGG"),
  new Airport("Lifou", "Loyaute, Pazifik", "LIF"),
  new Airport("Lihue (HI)", "USA", "LIH"),
  new Airport("Lille - Lille Airport", "France", "LIL"),
  new Airport("Lilongwe - Lilongwe International", "Malawi", "LLW"),
  new Airport("Lima - J Chavez International", "Peru", "LIM"),
  new Airport("Limassol", "Cyprus", "QLI"),
  new Airport("Limoges", "France", "LIG"),
  new Airport("Lincoln (NE)", "USA", "LNK"),
  new Airport("Lindeman Island", "Australia", "LDC"),
  new Airport("Linz - Hoersching", "Austria", "LNZ"),
  new Airport("Lisala", "Congo (DRC)", "LIQ"),
  new Airport("Lisbon - Lisboa", "Portugal", "LIS"),
  new Airport("Lismore", "Australia", "LSY"),
  new Airport("Little Rock (AR)", "USA", "LIT"),
  new Airport("Liverpool", "United Kingdom", "LPL"),
  new Airport("Lizard Island", "Australia", "LZR"),
  new Airport("Ljubljana - Brnik", "Slovenia", "LJU"),
  new Airport("Lockhart River", "Australia", "IRG"),
  new Airport("Lome", "Togo", "LFW"),
  new Airport("London", "Canada", "YXU"),
  new Airport("London Metropolitan Area", "United Kingdom", "LON"),
  new Airport("London - City Airport", "United Kingdom", "LCY"),
  new Airport("London - Gatwick", "United Kingdom", "LGW"),
  new Airport("London - Heathrow", "United Kingdom", "LHR"),
  new Airport("London - Luton", "United Kingdom", "LTN"),
  new Airport("London - Stansted", "United Kingdom", "STN"),
  new Airport("Londonderry - Eglinton", "United Kingdom", "LDY"),
  new Airport("Long Beach (CA)", "USA", "LGB"),
  new Airport("Long Island (AK)", "USA", "LIJ"),
  new Airport("Long Island, Islip (NY) - Mac Arthur", "USA", "ISP"),
  new Airport("Longreach", "Australia", "LRE"),
  new Airport("Longview/Kilgore (TX)", "USA", "GGG"),
  new Airport("Longyearbyen - Svalbard", "Svalbard/Norway", "LYR"),
  new Airport("Loreto", "Mexico", "LTO"),
  new Airport("Lorient", "France", "LRT"),
  new Airport("Los Angeles (CA) - International", "USA", "LAX"),
  new Airport("Los Cabos", "Mexico", "SJD"),
  new Airport("Los Mochis", "Mexico", "LMM"),
  new Airport("Los Rodeos", "Teneriffa/Spain", "TFN"),
  new Airport("Losinj - Losinj Arpt", "Croatia (Hrvatska)", "LSZ"),
  new Airport("Lourdes/Tarbes", "France", "LDE"),
  new Airport("Louisville (KY)", "USA", "SDF"),
  new Airport("Luanda - 4 de Fevereiro", "Angola", "LAD"),
  new Airport("Lubbock (TX)", "USA", "LBB"),
  new Airport("Lucknow", "India", "LKO"),
  new Airport("Luederitz", "Namibia", "LUD"),
  new Airport("Luga", "Malta", "MLA"),
  new Airport("Lugano", "Switzerland", "LUG"),
  new Airport("Lulea", "Sweden", "LLA"),
  new Airport("Lumbumbashi", "Congo (DRC)", "FBM"),
  new Airport("Lusaka - Lusaka International Airport", "Zambia", "LUN"),
  new Airport("Lusisiki", "South Africa", "LUJ"),
  new Airport("Luxembourg", "Luxembourg", "LUX"),
  new Airport("Luxi - Mangshi", "Yunnan, PR China", "LUM"),
  new Airport("Luxor", "Egypt", "LXR"),
  new Airport("Lvov (Lwow, Lemberg)", "Ukraine", "LWO"),
  new Airport("Lydd - Lydd International Airport", "United Kingdom", "LYX"),
  new Airport("Lynchburg (VA)", "USA", "LYH"),
  new Airport("Lyon - Lyon-Saint Exupéry Airport official website", "France", "LYS"),
  new Airport("Lyons (KS) - Rice County Municipal", "USA", "LYO"),
  new Airport("Maastricht/Aachen", "Netherlands", "MST"),
  new Airport("Macapa - Alberto Alcolumbre International Airport", "Brazil", "MCP"),
  new Airport("Macau - Macau International Airport", "Macau, China SAR", "MFM"),
  new Airport("Maceio - Zumbi dos Palmares International Airport", "Brazil", "MCZ"),
  new Airport("Mackay", "Australia", "MKY"),
  new Airport("Macon (GA)", "USA", "MCN"),
  new Airport("Mactan Island - Nab", "Philippines", "NOP"),
  new Airport("Madinah (Medina) - Mohammad Bin Abdulaziz", "Saudi Arabia", "MED"),
  new Airport("Madison (WI) - Dane County Regional Airport", "USA", "MSN"),
  new Airport("Madras (Chennai) - Chennai International Airport", "India", "MAA"),
  new Airport("Madrid - Barajas Airport", "Spain", "MAD"),
  new Airport("Mahe - Seychelles International", "Seychelles", "SEZ"),
  new Airport("Mahon", "Spain", "MAH"),
  new Airport("Maitland", "Australia", "MTL"),
  new Airport("Majunga", "Madagascar", "MJN"),
  new Airport("Makung", "Taiwan", "MZG"),
  new Airport("Malabo - Malabo International Airport", "Equatorial Guinea", "SSG"),
  new Airport("Malaga", "Spain", "AGP"),
  new Airport("Malatya", "Turkey", "MLX"),
  new Airport("Male - Velana International Airport", "Maledives", "MLE"),
  new Airport("Malindi", "Kenya", "MYD"),
  new Airport("Malmo (Malmoe)", "Sweden", "MMA"),
  new Airport("Malmo (Malmö) - Malmö Airport", "Sweden", "MMX"),
  new Airport("Man", "Cote d'Ivoire", "MJC"),
  new Airport("Managua - Augusto C Sandino", "Nicaragua", "MGA"),
  new Airport("Manaus - Eduardo Gomes International Airport", "Brazil", "MAO"),
  new Airport("Manchester", "United Kingdom", "MAN"),
  new Airport("Manchester (NH)", "USA", "MHT"),
  new Airport("Mandalay - Mandalay-Annisaton Airport", "Myanmar", "MDL"),
  new Airport("Manguna", "Papua New Guinea", "MFO"),
  new Airport("Manihi", "French Polynesia", "XMH"),
  new Airport("Manila - Ninoy Aquino International", "Philippines", "MNL"),
  new Airport("Manzanillo", "Mexico", "ZLO"),
  new Airport("Manzini - Matsapha International", "Swaziland", "MTS"),
  new Airport("Maputo - Maputo International", "Mozambique", "MPM"),
  new Airport("Mar del Plata", "Argentina", "MDQ"),
  new Airport("Maracaibo - La Chinita International", "Venezuela", "MAR"),
  new Airport("Maradi", "Niger", "MFQ"),
  new Airport("Maras", "Turkey", "KCM"),
  new Airport("Marathon (FL)", "USA", "MTH"),
  new Airport("Mardin", "Turkey", "MQM"),
  new Airport("Mare", "New Caledonia", "MEE"),
  new Airport("Margate", "South Africa", "MGH"),
  new Airport("Margerita", "Venezuela", "PMV"),
  new Airport("Maribor", "Slovenia", "MBX"),
  new Airport("Mariehamn (Maarianhamina)", "Finland", "MHQ"),
  new Airport("Maroua", "Cameroon", "MVR"),
  new Airport("Marquette (MI)", "USA", "MQT"),
  new Airport("Marrakesh - Menara Airport", "Morocco", "RAK"),
  new Airport("Marsa Alam", "Egypt", "RMF"),
  new Airport("Marsa Matrah (Marsa Matruh)", "Egypt", "MUH"),
  new Airport("Marseille - Marseille Provence Airport", "France", "MRS"),
  new Airport("Marsh Harbour", "Bahamas", "MHH"),
  new Airport("Martha's Vineyard (MA)", "USA", "MVY"),
  new Airport("Martinsburg (WV)", "USA", "MRB"),
  new Airport("Maryborough", "Australia", "MBH"),
  new Airport("Maseru - Moshoeshoe International", "Lesotho", "MSU"),
  new Airport("Mason City IA", "USA", "MCW"),
  new Airport("Masvingo", "Zimbabwe", "MVZ"),
  new Airport("Matsumoto, Nagano", "Japan", "MMJ"),
  new Airport("Matsuyama", "Japan", "MYJ"),
  new Airport("Mattoon (IL)", "USA", "MTO"),
  new Airport("Maun", "Botswana", "MUB"),
  new Airport("Maupiti", "French Polynesia", "MAU"),
  new Airport("Mauritius - S.Seewoosagur Ram International", "Mauritius", "MRU"),
  new Airport("Mayaguez", "Puerto Rico", "MAZ"),
  new Airport("Mazatlan", "Mexico", "MZT"),
  new Airport("McAllen (TX)", "USA", "MFE"),
  new Airport("Medan - Polania Int'l (now Soewondo AFB)", "Indonesia", "MES"),
  new Airport("Medan - Kualanamu International", "Indonesia", "KNO"),
  new Airport("Medellin - José María Córdova International", "Colombia", "MDE"),
  new Airport("Medford (OR)", "USA", "MFR"),
  new Airport("Medina", "Saudi Arabia", "MED"),
  new Airport("Meekatharra", "Australia", "MKR"),
  new Airport("Melbourne - Melbourne Airport (Tullamarine)", "Australia", "MEL"),
  new Airport("Melbourne (FL)", "USA", "MLB"),
  new Airport("Melville Hall", "Dominica", "DOM"),
  new Airport("Memphis (TN)", "USA", "MEM"),
  new Airport("Mendoza", "Argentina", "MDZ"),
  new Airport("Manado", "Indonesia", "MDC"),
  new Airport("Merced (CA)", "USA", "MCE"),
  new Airport("Merida", "Mexico", "MID"),
  new Airport("Meridian (MS)", "USA", "MEI"),
  new Airport("Merimbula", "Australia", "MIM"),
  new Airport("Messina", "South Africa", "MEZ"),
  new Airport("Metlakatla (AK)", "USA", "MTM"),
  new Airport("Metz -  Frescaty", "France", "MZM"),
  new Airport("Metz/Nancy Metz-Nancy-Lorraine", "France", "ETZ"),
  new Airport("Mexicali", "Mexico", "MXL"),
  new Airport("Mexico City - Mexico City International Airport", "Mexico", "MEX"),
  new Airport("Mexico City - Atizapan", "Mexico", "AZP"),
  new Airport("Mexico City - Juarez International", "Mexico", "MEX"),
  new Airport("Mexico City - Santa Lucia", "Mexico", "NLU"),
  new Airport("Mfuwe", "Zambia", "MFU"),
  new Airport("Miami (FL)", "USA", "MIA"),
  new Airport("Mianwali", "Pakistan", "MWD"),
  new Airport("Middlemount", "Australia", "MMM"),
  new Airport("Midland/Odessa (TX)", "USA", "MAF"),
  new Airport("Midway Island - Sand Island Field", "US Minor Outlying Islands", "MDY"),
  new Airport("Mikkeli", "Finland", "MIK"),
  new Airport("Milan", "Italy", "MIL"),
  new Airport("Milan - Linate", "Italy", "LIN"),
  new Airport("Milan - Malpensa", "Italy", "MXP"),
  new Airport("Milan - Orio Al Serio", "Italy", "BGY"),
  new Airport("Mildura", "Australia", "MQL"),
  new Airport("Miles City (MT)", "USA", "MLS"),
  new Airport("Milford Sound", "New Zealand", "MFN"),
  new Airport("Milwaukee (WI)", "USA", "MKE"),
  new Airport("Minatitlan", "Mexico", "MTT"),
  new Airport("Mineralnye Vody", "Russia", "MRV"),
  new Airport("Minneapolis - St. Paul International Airport (MN)", "USA", "MSP"),
  new Airport("Minot (ND)", "USA", "MOT"),
  new Airport("Minsk, International", "Belarus", "MSQ"),
  new Airport("Miri", "Malaysia", "MYY"),
  new Airport("Mirpur", "Pakistan", "QML"),
  new Airport("Missula (MT)", "USA", "MSO"),
  new Airport("Mitchell (SD)", "USA", "MHE"),
  new Airport("Miyako Jima (Ryuku Islands) - Hirara", "Japan", "MMY"),
  new Airport("Miyazaki", "Japan", "KMI"),
  new Airport("Mkambati", "South Africa", "MBM"),
  new Airport("Moanda", "Gabon", "MFF"),
  new Airport("Mobile (AL) - Pascagoula (MS)", "USA", "MOB"),
  new Airport("Modesto (CA)", "USA", "MOD"),
  new Airport("Moenjodaro", "Pakistan", "MJD"),
  new Airport("Mogadishu", "Somalia", "MGQ"),
  new Airport("Mokuti", "Namibia", "OKU"),
  new Airport("Moline/Quad Cities (IL)", "USA", "MLI"),
  new Airport("Mombasa - Moi International", "Kenya", "MBA"),
  new Airport("Monastir", "Tunisia", "MIR"),
  new Airport("Moncton", "Canada", "YQM"),
  new Airport("Monroe (LA)", "USA", "MLU"),
  new Airport("Monrovia - Metropolitan Area", "Liberia", "MLW"),
  new Airport("Monrovia - Roberts International", "Liberia", "ROB"),
  new Airport("Montego Bay - Sangster International", "Jamaica", "MBJ"),
  new Airport("Montenegro", "Brazil", "QGF"),
  new Airport("Monterey (CA)", "USA", "MRY"),
  new Airport("Monterrey - Gen. Mariano Escobedo", "Mexico", "MTY"),
  new Airport("Monterrey - Aeropuerto Del Norte", "Mexico", "NTR"),
  new Airport("Montevideo - Carrasco International Airport", "Uruguay", "MVD"),
  new Airport("Montgomery (AL) - Montgomery Regional Airport", "USA", "MGM"),
  new Airport("Montpellier - Montpellier–Méditerranée Airport", "France", "MPL"),
  new Airport("Montreal", "Canada", "YMQ"),
  new Airport("Montreal - Dorval (Montréal-Trudeau)", "Canada", "YUL"),
  new Airport("Montreal - Mirabel", "Canada", "YMX"),
  new Airport("Montrose/Tellruide (CO)", "USA", "MTJ"),
  new Airport("Moorea", "French Polynesia", "MOZ"),
  new Airport("Moranbah", "Australia", "MOV"),
  new Airport("Moree", "Australia", "MRZ"),
  new Airport("Morelia", "Mexico", "MLM"),
  new Airport("Morgantown (WV)", "USA", "MGW"),
  new Airport("Morioka, Hanamaki", "Japan", "HNA"),
  new Airport("Moroni - Prince Said Ibrahim", "Comoros (Comores)", "HAH"),
  new Airport("Moruya", "Australia", "MYA"),
  new Airport("Moscow - Metropolitan Area", "Russia", "MOW"),
  new Airport("Moscow - Domodedovo", "Russia", "DME"),
  new Airport("Moscow - Sheremetyevo", "Russia", "SVO"),
  new Airport("Moscow - Vnukovo", "Russia", "VKO"),
  new Airport("Moses Lake (WA)", "USA", "MWH"),
  new Airport("Mossel Bay", "South Africa", "MZY"),
  new Airport("Mostar", "Bosnia and Herzegovina", "OMO"),
  new Airport("Mosul", "Iraq", "OSM"),
  new Airport("Mouila", "Gabon", "MJL"),
  new Airport("Moundou", "Chad", "MQQ"),
  new Airport("Mount Cook", "New Zealand", "GTN"),
  new Airport("Mount Gambier", "Australia", "MGB"),
  new Airport("Mount Magnet", "Australia", "MMG"),
  new Airport("Mt. Isa", "Australia", "ISA"),
  new Airport("Mt. McKinley (AK)", "USA", "MCL"),
  new Airport("Muenchen (Munich) - Franz Josef Strauss", "Germany", "MUC"),
  new Airport("Muenster/Osnabrueck", "Germany", "FMO"),
  new Airport("Mulhouse", "France", "MLH"),
  new Airport("Multan", "Pakistan", "MUX"),
  new Airport("Murcia", "Spain", "MJV"),
  new Airport("Murmansk", "Russia", "MMK"),
  new Airport("Mus", "Turkey", "MSR"),
  new Airport("Muscat - Seeb", "Oman", "MCT"),
  new Airport("Muscle Shoals (AL)", "USA", "MSL"),
  new Airport("Muskegon (MI)", "USA", "MKG"),
  new Airport("Muzaffarabad", "Pakistan", "MFG"),
  new Airport("Mvengue", "Gabon", "MVB"),
  new Airport("Mykonos", "Greece", "JMK"),
  new Airport("Myrtle Beach (SC) - Myrtle Beach AFB", "USA", "MYR"),
  new Airport("Myrtle Beach (SC) - Grand Strand Airport", "USA", "CRE"),
  new Airport("Mysore", "India", "MYQ"),
  new Airport("Mytilene (Lesbos)", "Greece", "MJT"),
  new Airport("Mzamba", "South Africa", "MZF"),
  new Airport("Nadi", "Fiji", "NAN"),
  new Airport("Nagasaki", "Japan", "NGS"),
  new Airport("Nagoya - Komaki AFB", "Japan", "NGO"),
  new Airport("Nagpur", "India", "NAG"),
  new Airport("Nairobi", "Kenya", "NBO"),
  new Airport("Nakhichevan", "Azerbaijan", "NAJ"),
  new Airport("Nakhon Si Thammarat", "Thailand", "NST"),
  new Airport("Nancy", "France", "ENC"),
  new Airport("Nanisivik", "Canada", "YSR"),
  new Airport("Nanning", "Guangxi, PR China", "NNG"),
  new Airport("Nantes - Nantes Atlantique Airport", "France", "NTE"),
  new Airport("Nantucket (MA)", "USA", "ACK"),
  new Airport("Naples - Naples Capodichino Airport", "Italy", "NAP"),
  new Airport("Naples (FL)", "USA", "APF"),
  new Airport("Narrabri", "Australia", "NAA"),
  new Airport("Narrandera", "Australia", "NRA"),
  new Airport("Narsarsuaq", "Greenland", "UAK"),
  new Airport("Nashville (TN)", "USA", "BNA"),
  new Airport("Nassau", "Bahamas", "NAS"),
  new Airport("Natal - Augusto Severo International Airport", "Brazil", "NAT"),
  new Airport("Nausori", "Fiji/Suva", "SUV"),
  new Airport("Nawab Shah", "Pakistan", "WNS"),
  new Airport("Naxos - Naxos Airport", "Greece", "JNX"),
  new Airport("N'Djamena", "Chad", "NDJ"),
  new Airport("N'Dola", "Zambia", "NLA"),
  new Airport("Nelson", "New Zealand", "NSN"),
  new Airport("Nelspruit", "South Africa", "NLP"),
  new Airport("Nelspruit - Kruger Mpumalanga International Airport", "South Africa", "MQP"),
  new Airport("Nevis", "St. Kitts and Nevis", "NEV"),
  new Airport("New Bern (NC)", "USA", "EWN"),
  new Airport("New Haven (CT)", "USA", "HVN"),
  new Airport("New Orleans, La", "USA", "MSY"),
  new Airport("Newquay", "United Kingdom", "NQY"),
  new Airport("New Valley - Kharga", "Egypt", "UVL"),
  new Airport("New York - John F. Kennedy (NY)", "USA", "JFK"),
  new Airport("New York - LaGuardia (NY)", "USA", "LGA"),
  new Airport("New York - Newark (NJ)", "USA", "EWR"),
  new Airport("New York (NY)", "USA", "NYC"),
  new Airport("Newburgh (NY)", "USA", "SWF"),
  new Airport("Newcastle - Belmont", "Australia", "BEO"),
  new Airport("Newcastle - Williamtown", "Australia", "NTL"),
  new Airport("Newcastle", "United Kingdom", "NCL"),
  new Airport("Newcastle", "South Africa", "NCS"),
  new Airport("Newman", "Australia", "ZNE"),
  new Airport("Newport News/Williamsburg (VA)", "USA", "PHF"),
  new Airport("N'Gaoundere", "Cameroon", "NGE"),
  new Airport("Niagara Falls International", "USA", "IAG"),
  new Airport("Niamey", "Niger", "NIM"),
  new Airport("Nice - Cote D'Azur Airport", "France", "NCE"),
  new Airport("Nicosia", "Cyprus", "NIC"),
  new Airport("Nikolaev", "Ukraine", "NLV"),
  new Airport("Niigata", "Japan", "KIJ"),
  new Airport("Nimes", "France", "FNI"),
  new Airport("Nis", "Serbia", "INI"),
  new Airport("Nizhny Novgorod - Strigino International Airport", "Russia", "GOJ"),
  new Airport("Nome (AK)", "USA", "OME"),
  new Airport("Noosa", "Australia", "NSA"),
  new Airport("Norfolk Island", "Australia", "NLK"),
  new Airport("Norfolk/Virginia Beach (VA)", "USA", "ORF"),
  new Airport("Norman Wells", "Canada", "YVQ"),
  new Airport("Norrkoeping", "Sweden", "NRK"),
  new Airport("North Bend (OR)", "USA", "OTH"),
  new Airport("North Eleuthera", "Bahamas", "ELH"),
  new Airport("Norwich", "United Kingdom", "NWI"),
  new Airport("Nottingham - East Midlands", "United Kingdom", "EMA"),
  new Airport("Nouadhibou", "Mauritania", "NDB"),
  new Airport("Nouakchott", "Mauritania", "NKC"),
  new Airport("Noumea", "New Caledonia", "NOU"),
  new Airport("Novi Sad", "Serbia", "QND"),
  new Airport("Novosibirsk - Tolmachevo Airport", "Russia", "OVB"),
  new Airport("Nürnberg (Nuremberg)", "Germany", "NUE"),
  new Airport("Nuevo Laredo", "Mexico", "NLD"),
  new Airport("Nuku'alofa - Fua'Amotu International", "Tonga", "TBU"),
  new Airport("Oakland (CA)", "USA", "OAK"),
  new Airport("Oaxaca - Xoxocotlan", "Mexico", "OAX"),
  new Airport("Odense", "Denmark", "ODE"),
  new Airport("Odessa", "Ukraine", "ODS"),
  new Airport("Oerebro", "Sweden", "ORB"),
  new Airport("Ohrid", "Macedonia", "OHD"),
  new Airport("Oita", "Japan", "OIT"),
  new Airport("Okayama", "Japan", "OKJ"),
  new Airport("Okinawa, Ryukyo Island - Naha", "Japan", "OKA"),
  new Airport("Oklahoma City (OK) - Will Rogers World", "USA", "OKC"),
  new Airport("Olbia", "Italy", "OLB"),
  new Airport("Olympic Dam", "Australia", "OLP"),
  new Airport("Omaha (NE)", "USA", "OMA"),
  new Airport("Ondangwa", "Namibia", "OND"),
  new Airport("Ontario (CA)", "USA", "ONT"),
  new Airport("Oran (Ouahran)", "Algeria", "ORN"),
  new Airport("Orange", "Australia", "OAG"),
  new Airport("Orange County (Santa Ana) (CA)", "USA", "SNA"),
  new Airport("Oranjemund", "Namibia", "OMD"),
  new Airport("Oranjestad - Reina Beatrix International", "Aruba", "AUA"),
  new Airport("Orkney - Kirkwall", "United Kingdom", "KOI"),
  new Airport("Orlando Metropolitan Area (FL)", "USA", "ORL"),
  new Airport("Orlando - International Airport (FL)", "USA", "MCO"),
  new Airport("Orpheus Island", "Australia", "ORS"),
  new Airport("Osaka, Metropolitan Area", "Japan", "OSA"),
  new Airport("Osaka - Itami", "Japan", "ITM"),
  new Airport("Osaka - Kansai International Airport", "Japan", "KIX"),
  new Airport("Oshkosh (WI)", "USA", "OSH"),
  new Airport("Osijek", "Croatia (Hrvatska)", "OSI"),
  new Airport("Oslo - Oslo Airport, Gardermoen", "Norway", "OSL"),
  new Airport("Oslo - Fornebu", "Norway", "FBU"),
  new Airport("Oslo - Sandefjord", "Norway", "TRF"),
  new Airport("Ottawa - Hull", "Canada", "YOW"),
  new Airport("Ouadda", "Central African Republic", "ODA"),
  new Airport("Ouarzazate", "Morocco", "OZZ"),
  new Airport("Oudtshoorn", "South Africa", "OUH"),
  new Airport("Ouagadougou", "Burkina Faso", "OUA"),
  new Airport("Oujda", "Morocco", "OUD"),
  new Airport("Oulu", "Finland", "OUL"),
  new Airport("Out Skerries (Shetland)", "United Kingdom", "OUK"),
  new Airport("Oviedo", "Spain", "OVD"),
  new Airport("Owensboro (KY)", "USA", "OWB"),
  new Airport("Oxnard (CA)", "USA", "OXR"),
  new Airport("Oyem", "Gabon/Loyautte", "UVE"),
  new Airport("Paderborn/Lippstadt", "Germany", "PAD"),
  new Airport("Paducah (KY)", "USA", "PAH"),
  new Airport("Page/Lake Powell (AZ)", "USA", "PGA"),
  new Airport("Pago Pago", "American Samoa", "PPG"),
  new Airport("Pakersburg (WV) /Marietta (OH)", "USA", "PKB"),
  new Airport("Palermo - Punta Raisi", "Italy", "PMO"),
  new Airport("Palma de Mallorca", "Spain", "PMI"),
  new Airport("Palmas", "Brazil", "PMW"),
  new Airport("Palmdale/Lancaster (CA)", "USA", "PMD"),
  new Airport("Palmerston North", "New Zealand", "PMR"),
  new Airport("Palm Springs (CA)", "USA", "PSP"),
  new Airport("Panama City - Tocumen International", "Panama", "PTY"),
  new Airport("Panama City (FL)", "USA", "PFN"),
  new Airport("Panjgur", "Pakistan", "PJG"),
  new Airport("Pantelleria", "Italy", "PNL"),
  new Airport("Papeete - Faaa", "French Polynesia (Tahiti)", "PPT"),
  new Airport("Paphos", "Cyprus", "PFO"),
  new Airport("Paraburdoo", "Australia", "PBO"),
  new Airport("Paramaribo - Zanderij International", "Suriname", "PBM"),
  new Airport("Paris", "France", "PAR"),
  new Airport("Paris - Charles de Gaulle", "France", "CDG"),
  new Airport("Paris - Le Bourget", "France", "LBG"),
  new Airport("Paris - Orly", "France", "ORY"),
  new Airport("Paro", "Bhutan", "PBH"),
  new Airport("Pasco (WA)", "USA", "PSC"),
  new Airport("Pasni", "Pakistan", "PSI"),
  new Airport("Patna", "India", "PAT"),
  new Airport("Pattaya", "Thailand", "PYX"),
  new Airport("Pau", "France", "PUF"),
  new Airport("Pellston (MI)", "USA", "PLN"),
  new Airport("Penang International", "Malaysia", "PEN"),
  new Airport("Pendelton (OR)", "USA", "PDT"),
  new Airport("Pensacola (FL)", "USA", "PNS"),
  new Airport("Peoria/Bloomington (IL)", "USA", "PIA"),
  new Airport("Pereira", "Colombia", "PEI"),
  new Airport("Perpignan", "France", "PGF"),
  new Airport("Perth International", "Australia", "PER"),
  new Airport("Perugia", "Italy", "PEG"),
  new Airport("Pescara", "Italy", "PSR"),
  new Airport("Peshawar", "Pakistan", "PEW"),
  new Airport("Petersburg (AK)", "USA", "PSG"),
  new Airport("Phalaborwa", "South Africa", "PHW"),
  new Airport("Philadelphia (PA) - International", "USA", "PHL"),
  new Airport("Phnom Penh - Pochentong", "Cambodia", "PNH"),
  new Airport("Phoenix (AZ) - Sky Harbor International", "USA", "PHX"),
  new Airport("Phuket", "Thailand", "HKT"),
  new Airport("Pierre (SD)", "USA", "PIR"),
  new Airport("Pietermaritzburg", "South Africa", "PZB"),
  new Airport("Pietersburg", "South Africa", "PTG"),
  new Airport("Pilanesberg/Sun City", "South Africa", "NTY"),
  new Airport("Pisa - Galileo Galilei", "Italy", "PSA"),
  new Airport("Pittsburgh International Airport (PA)", "USA", "PIT"),
  new Airport("Plattsburgh (NY)", "USA", "PLB"),
  new Airport("Plettenberg Bay", "South Africa", "PBZ"),
  new Airport("Pocatello (ID)", "USA", "PIH"),
  new Airport("Podgorica", "Montenegro", "TGD"),
  new Airport("Pohnpei", "Micronesia", "PNI"),
  new Airport("Pointe a Pitre", "Guadeloupe", "PTP"),
  new Airport("Pointe Noire", "Congo (ROC)", "PNR"),
  new Airport("Poitiers - Biard", "France", "PIS"),
  new Airport("Ponce", "Puerto Rico", "PSE"),
  new Airport("Ponta Delgada", "Portugal", "PDL"),
  new Airport("Pori", "Finland", "POR"),
  new Airport("Port Angeles (WA)", "USA", "CLM"),
  new Airport("Port au Prince", "Haiti", "PAP"),
  new Airport("Port Augusta", "Australia", "PUG"),
  new Airport("Port Elizabeth", "South Africa", "PLZ"),
  new Airport("Port Gentil", "Gabon", "POG"),
  new Airport("Port Harcourt", "Nigeria", "PHC"),
  new Airport("Port Hedland", "Australia", "PHE"),
  new Airport("Portland", "Australia", "PTJ"),
  new Airport("Portland (ME)", "USA", "PWM"),
  new Airport("Portland International (OR)", "USA", "PDX"),
  new Airport("Port Lincoln", "Australia", "PLO"),
  new Airport("Port Macquarie", "Australia", "PQQ"),
  new Airport("Port Menier, PQ", "Canada", "YPN"),
  new Airport("Port Moresby - Jackson Field", "Papua New Guinea", "POM"),
  new Airport("Porto", "Portugal", "OPO"),
  new Airport("Porto Alegre - Salgado Filho International Airport", "Brazil", "POA"),
  new Airport("Port of Spain - Piarco International", "Trinidad and Tobago", "POS"),
  new Airport("Port Said", "Egypt", "PSD"),
  new Airport("Porto Santo", "Portugal", "PXO"),
  new Airport("Porto Velho", "Brazil", "PVH"),
  new Airport("Port Vila", "Vanuatu", "VLI"),
  new Airport("Poughkeepsie (NY)", "USA", "POU"),
  new Airport("Poznan, Lawica", "Poland", "POZ"),
  new Airport("Prague - Václav Havel Airport (formerly Ruzyne)", "Czech Republic", "PRG"),
  new Airport("Praia - Nelson Mandela International Airport", "Cape Verde", "RAI"),
  new Airport("Presque Island (ME)", "USA", "PQI"),
  new Airport("Pretoria - Wonderboom Apt.", "South Africa", "PRY"),
  new Airport("Preveza/Lefkas", "Greece", "PVK"),
  new Airport("Prince George", "Canada", "YXS"),
  new Airport("Prince Rupert/Digby Island", "Canada", "YPR"),
  new Airport("Pristina", "Serbia", "PRN"),
  new Airport("Prosperpine", "Australia", "PPP"),
  new Airport("Providence (RI)", "USA", "PVD"),
  new Airport("Prudhoe Bay (AK)", "USA", "SCC"),
  new Airport("Puebla", "Mexico", "PBC"),
  new Airport("Pueblo (CO)", "USA", "PUB"),
  new Airport("Puerto Escondido", "Mexico", "PXM"),
  new Airport("Puerto Ordaz", "Venezuela", "PZO"),
  new Airport("Puerto Plata", "Dominican Republic", "POP"),
  new Airport("Puerto Vallarta", "Mexico", "PVR"),
  new Airport("Pukatawagan", "Canada", "XPK"),
  new Airport("Pula", "Croatia (Hrvatska)", "PUY"),
  new Airport("Pullman (WA)", "USA", "PUW"),
  new Airport("Pune", "India, Maharashtra", "PNQ"),
  new Airport("Punta Arenas - Presidente Carlos Ibáñez del Campo", "Chile", "PUQ"),
  new Airport("Punta Cana - Punta Cana International", "Dominican Republic", "PUJ"),
  new Airport("Pu San (Busan) - Gimhae International Airport", "South Korea", "PUS"),
  new Airport("Pyongyang - Sunan International Airport", "North Korea", "FNJ"),
  new Airport("Quebec - Quebec International", "Canada", "YQB"),
  new Airport("Queenstown", "Australia", "UEE"),
  new Airport("Queenstown", "New Zealand", "ZQN"),
  new Airport("Quetta", "Pakistan", "UET"),
  new Airport("Qingdao", "Shandong, PR China", "TAO"),
  new Airport("Quimper", "France", "UIP"),
  new Airport("Quincy (IL)", "USA", "UIN"),
  new Airport("Quito - Mariscal Sucre International Airport", "Ecuador", "UIO"),
  new Airport("Rabat - Rabat-Salé Airport", "Morocco", "RBA"),
  new Airport("Rahim Yar Khan - Shaikh Zayed International Airport", "Pakistan", "RYK"),
  new Airport("Raiatea", "French Polynesia", "RFP"),
  new Airport("Rainbow Lake, AB", "Canada", "YOP"),
  new Airport("Rajkot", "India", "RAJ"),
  new Airport("Raleigh/Durham (NC)", "USA", "RDU"),
  new Airport("Ranchi", "India", "IXR"),
  new Airport("Rangiroa", "French Polynesia", "RGI"),
  new Airport("Rangoon (Yangon) - Mingaladon", "Myanmar", "RGN"),
  new Airport("Rapid City (SD)", "USA", "RAP"),
  new Airport("Rarotonga", "Cook Island", "RAR"),
  new Airport("Ras al Khaymah (Ras al Khaimah)", "United Arab Emirates", "RKT"),
  new Airport("Rawala Kot", "Pakistan", "RAZ"),
  new Airport("Rawalpindi", "Pakistan", "RWP"),
  new Airport("Reading (PA)", "USA", "RDG"),
  new Airport("Recife - Guararapes-Gilberto Freyre International", "Brazil", "REC"),
  new Airport("Redding (CA)", "USA", "RDD"),
  new Airport("Redmond (OR)", "USA", "RDM"),
  new Airport("Reggio Calabria", "Italy", "REG"),
  new Airport("Regina", "Canada", "YQR"),
  new Airport("Reina Sofia", "Teneriffa/Spain", "TFS"),
  new Airport("Rennes", "France", "RNS"),
  new Airport("Reno (NV)", "USA", "RNO"),
  new Airport("Resolute Bay", "Canada", "YRB"),
  new Airport("Reus", "Spain", "REU"),
  new Airport("Reykjavik - Metropolitan Area", "Iceland", "REK"),
  new Airport("Reykjavik - Keflavik International", "Iceland", "KEF"),
  new Airport("Rhinelander (WI)", "USA", "RHI"),
  new Airport("Rhodos", "Greece", "RHO"),
  new Airport("Richards Bay", "South Africa", "RCB"),
  new Airport("Richmond (VA)", "USA", "RIC"),
  new Airport("Riga", "Latvia", "RIX"),
  new Airport("Rijeka", "Croatia (Hrvatska)", "RJK"),
  new Airport("Rimini", "Italy", "RMI"),
  new Airport("Rio Branco - Plácido de Castro International Airport", "Brazil", "RBR"),
  new Airport("Rio de Janeiro - Galeao", "Brazil", "GIG"),
  new Airport("Rio de Janeiro - Santos Dumont", "Brazil", "SDU"),
  new Airport("Rio de Janeiro", "Brazil", "RIO"),
  new Airport("Riyadh - King Khaled International", "Saudi Arabia", "RUH"),
  new Airport("Roanne", "France", "RNE"),
  new Airport("Roanoke (VA)", "USA", "ROA"),
  new Airport("Roatan", "Honduras", "RTB"),
  new Airport("Rochester (MN)", "USA", "RST"),
  new Airport("Rochester (NY)", "USA", "ROC"),
  new Airport("Rock Sound", "Bahamas", "RSD"),
  new Airport("Rock Springs (WY)", "USA", "RKS"),
  new Airport("Rockford (IL)", "USA", "RFD"),
  new Airport("Rockhampton", "Australia", "ROK"),
  new Airport("Rockland (ME)", "USA", "RKD"),
  new Airport("Rocky Mount - Wilson (NC)", "USA", "RWI"),
  new Airport("Rodez", "France", "RDZ"),
  new Airport("Rodrigues Island", "Mauritius", "RRG"),
  new Airport("Roenne", "Denmark", "RNN"),
  new Airport("Rome", "Italy", "ROM"),
  new Airport("Rome - Ciampino", "Italy", "CIA"),
  new Airport("Rome - Fuimicino", "Italy", "FCO"),
  new Airport("Ronneby", "Sweden", "RNB"),
  new Airport("Rosario", "Argentina", "ROS"),
  new Airport("Rostov-on-Don - Rostov-on-Don Airport", "Russia", "RVI"),
  new Airport("Rostov-on-Don - Platov International Airport", "Russia", "ROV"),
  new Airport("Rotorua", "New Zealand", "ROT"),
  new Airport("Rotterdam", "Netherlands", "RTM"),
  new Airport("Rovaniemi", "Finland", "RVN"),
  new Airport("Rundu", "Namibia", "NDU"),
  new Airport("Ruse", "Bulgaria", "ROU"),
  new Airport("Saarbruecken", "Germany", "SCN"),
  new Airport("Sacramento (CA)", "USA", "SMF"),
  new Airport("Sado Shima", "Japan", "SDS"),
  new Airport("Saginaw/Bay City/Midland (MI)", "USA", "MBS"),
  new Airport("Saidu Sharif", "Pakistan", "SDT"),
  new Airport("Saigon (Ho Chi Minh City) - Tan Son Nhat International", "Viet Nam", "SGN"),
  new Airport("Saint Brieuc", "France", "SBK"),
  new Airport("Saint Denis - Roland Garros Airport", "Reunion", "RUN"),
  new Airport("Saint John", "Canada", "YSJ"),
  new Airport("Saipan", "Northern Mariana Islands", "SPN"),
  new Airport("Sal", "Cape Verde", "SID"),
  new Airport("Salalah", "Oman", "SLL"),
  new Airport("Salem (OR)", "USA", "SLE"),
  new Airport("Salinas (CA)", "USA", "SNS"),
  new Airport("Salinas", "Ecuador", "SNC"),
  new Airport("Salisbury", "Zimbabwe", "SAY"),
  new Airport("Salisbury (MD)", "USA", "SBY"),
  new Airport("Saloniki", "Greece", "SKG"),
  new Airport("Salta, Gen Belgrano", "Argentina", "SLA"),
  new Airport("Salt Lake City (UT)", "USA", "SLC"),
  new Airport("Salvador - Salvador International Airport", "Brazil", "SSA"),
  new Airport("Salzburg - W.A. Mozart", "Austria", "SZG"),
  new Airport("Samara - Kurumoch International Airport", "Russia", "KUF"),
  new Airport("Samarkand - Samarkand International Airport", "Uzbekistan", "SKD"),
  new Airport("Samos", "Greece", "SMI"),
  new Airport("Samsun", "Turkey", "SZF"),
  new Airport("San Andres", "Colombia", "ADZ"),
  new Airport("San Angelo (TX)", "USA", "SJT"),
  new Airport("San Antonio (TX)", "USA", "SAT"),
  new Airport("San Carlos de Bariloche", "Argentina", "BRC"),
  new Airport("San Diego - Lindberg Field International (CA)", "USA", "SAN"),
  new Airport("San Francisco - International Airport, SA", "USA", "SFO"),
  new Airport("San Jose Cabo", "Mexico", "SJD"),
  new Airport("San Jose", "Costa Rica", "SJO"),
  new Airport("San Jose (CA)", "USA", "SJC"),
  new Airport("San Juan - Luis Munoz Marin International Airport", "Puerto Rico", "SJU"),
  new Airport("San Luis Obisco (CA)", "USA", "SBP"),
  new Airport("San Luis Potosi", "Mexico", "SLP"),
  new Airport("San Pedro", "Cote d'Ivoire", "SPY"),
  new Airport("San Pedro Sula", "Honduras", "SAP"),
  new Airport("San Salvador", "Bahamas", "ZSA"),
  new Airport("San Salvador", "El Salvador", "SAL"),
  new Airport("San Sebastian", "Spain", "EAS"),
  new Airport("Sanaa (Sana'a) - Sana'a International", "Yemen", "SAH"),
  new Airport("Sandspit", "Canada", "YZP"),
  new Airport("Santa Ana - John Wayne Airport (CA)", "USA", "SNA"),
  new Airport("Santa Barbara (CA)", "USA", "SBA"),
  new Airport("Santa Cruz de la Palma", "Spain", "SPC"),
  new Airport("Santa Cruz de la Sierra", "Bolivia", "SRZ"),
  new Airport("Santa Katarina - Mount Sinai", "Egypt", "SKV"),
  new Airport("Santa Maria", "Portugal", "SMA"),
  new Airport("Santa Maria (CA)", "USA", "SMX"),
  new Airport("Santander", "Spain", "SDR"),
  new Airport("Santa Rosa (CA)", "USA", "STS"),
  new Airport("Santa Rosa", "Bolivia", "SRB"),
  new Airport("Santa Rosa", "Brazil", "SRA"),
  new Airport("Santa Rosa", "Argentina", "RSA"),
  new Airport("Santa Rosa, Copan", "Honduras", "SDH"),
  new Airport("Santa Rosalia", "Colombia", "SSL"),
  new Airport("Santa Rosalia", "Mexico", "SRL"),
  new Airport("Santiago - Antonio Maceo Airport", "Cuba", "SCU"),
  new Airport("Santiago de Chile - Arturo Merino Benitez", "Chile", "SCL"),
  new Airport("Santiago de Compostela", "Spain", "SCQ"),
  new Airport("Santo", "Vanuatu", "SON"),
  new Airport("Santo Domingo", "Dominican Republic", "SDQ"),
  new Airport("Sao Luis - Marechal Cunha Machado International", "Brazil", "SLZ"),
  new Airport("Sao Paulo", "Brazil", "SAO"),
  new Airport("Sao Paulo - Congonhas", "Brazil", "CGH"),
  new Airport("Sao Paulo - Guarulhos", "Brazil", "GRU"),
  new Airport("Sao Paulo - Viracopos", "Brazil", "VCP"),
  new Airport("Sao Tome", "Sao Tome & Principe", "TMS"),
  new Airport("Sapporo", "Hokkaido, Japan", "SPK"),
  new Airport("Sapporo - Okadama", "Hokkaido, Japan", "OKD"),
  new Airport("Sapporo - New Chitose Airport", "Japan", "CTS"),
  new Airport("Sarajevo", "Bosnia and Herzegovina", "SJJ"),
  new Airport("Saransk - Saransk Airport", "Russia", "SKX"),
  new Airport("Sarasota/Bradenton (FL)", "USA", "SRQ"),
  new Airport("Saskatoon", "Canada", "YXE"),
  new Airport("Sassandra", "Cote d'Ivoire", "ZSS"),
  new Airport("Savannah (GA)", "USA", "SAV"),
  new Airport("Savonlinna", "Finland", "SVL"),
  new Airport("Scarborough - Crown Point International", "Trinidad and Tobago", "TAB"),
  new Airport("Scone", "Australia", "NSO"),
  new Airport("Scottsdale (AZ)", "USA", "SCF"),
  new Airport("Seattle/Tacoma (WA)", "USA", "SEA"),
  new Airport("Sehba", "Libya", "SEB"),
  new Airport("Seinaejoki", "Finland", "SJY"),
  new Airport("Selibi Phikwe", "Botswana", "PKW"),
  new Airport("Sendai", "Japan", "SDJ"),
  new Airport("Seoul - Incheon International Airport", "South Korea", "ICN"),
  new Airport("Seoul - Kimpo", "South Korea", "SEL"),
  new Airport("Sevilla", "Spain", "SVQ"),
  new Airport("Sfax", "Tunisia", "SFA"),
  new Airport("Shamattawa, MB", "Canada", "ZTM"),
  new Airport("Shanghai - Hongqiao", "China", "SHA"),
  new Airport("Shanghai - Pu Dong", "China", "PVG"),
  new Airport("Shannon (Limerick)", "Ireland", "SNN"),
  new Airport("Sharjah", "United Arab Emirates", "SHJ"),
  new Airport("Sharm El Sheikh", "Egypt", "SSH"),
  new Airport("Sheffield, City Airport", "United Kingdom", "SZD"),
  new Airport("Sheffield, Doncaster, Robin Hood International Airport", "United Kingdom", "DSA"),
  new Airport("Shenandoah Valley/Stauton (VA)", "USA", "SHD"),
  new Airport("Shenyang", "Liaoning, PR China", "SHE"),
  new Airport("Shenzhen - Shenzhen Bao'an International", "Guangdong, PR China", "SZX"),
  new Airport("Sheridan (WY)", "USA", "SHR"),
  new Airport("Shreveport, La", "USA", "SHV"),
  new Airport("Shute Harbour", "Australia", "JHQ"),
  new Airport("Sibu", "Malaysia", "SBW"),
  new Airport("Sidney (MT)", "USA", "SDY"),
  new Airport("Silistra", "Bulgaria", "SLS"),
  new Airport("Simferopol", "Ukraine", "SIP"),
  new Airport("Sindhri", "Pakistan", "MPD"),
  new Airport("Singapore - Changi", "Singapore", "SIN"),
  new Airport("Singapore - Paya Lebar", "Singapore", "QPG"),
  new Airport("Singapore - Seletar", "Singapore", "XSP"),
  new Airport("Singleton", "Australia", "SIX"),
  new Airport("Sioux City IA", "USA", "SUX"),
  new Airport("Sioux Falls (SD)", "USA", "FSD"),
  new Airport("Sishen", "South Africa", "SIS"),
  new Airport("Sitka (AK)", "USA", "SIT"),
  new Airport("Sivas", "Turkey", "VAS"),
  new Airport("Siwa", "Egypt", "SEW"),
  new Airport("Skagway (AK)", "USA", "SGY"),
  new Airport("Skardu", "Pakistan", "KDU"),
  new Airport("Skiathos", "Greece", "JSI"),
  new Airport("Skopje", "Macedonia", "SKP"),
  new Airport("Skrydstrup", "Denmark", "SKS"),
  new Airport("Skukuza", "South Africa", "SZK"),
  new Airport("Sligo", "Ireland", "SXL"),
  new Airport("Smithers", "Canada", "YYD"),
  new Airport("Sodankylae", "Finland", "SOT"),
  new Airport("Soenderborg", "Denmark", "SGD"),
  new Airport("Soendre Stroemfjord", "Greenland", "SFJ"),
  new Airport("Sofia - Vrazhdebna", "Bulgaria", "SOF"),
  new Airport("Sogndal", "Norway", "SOG"),
  new Airport("Southampton - Eastleigh", "United Kingdom", "SOU"),
  new Airport("South Bend (IN)", "USA", "SBN"),
  new Airport("South Indian Lake, MB", "Canada", "XSI"),
  new Airport("South Molle Island", "Australia", "SOI"),
  new Airport("Southend (London)", "United Kingdom", "SEN"),
  new Airport("Split", "Croatia (Hrvatska)", "SPU"),
  new Airport("Spokane (WA)", "USA", "GEG"),
  new Airport("Springbok", "South Africa", "SBU"),
  new Airport("Springfield (IL)", "USA", "SPI"),
  new Airport("Springfield (MO)", "USA", "SGF"),
  new Airport("Srinagar", "India", "SXR"),
  new Airport("St. Augustin, PQ", "Canada", "YIF"),
  new Airport("St. Croix", "Virgin Islands (U.S.)", "STX"),
  new Airport("St. Etienne", "France", "EBU"),
  new Airport("St. George (UT)", "USA", "SGU"),
  new Airport("St. John's", "Canada", "YYT"),
  new Airport("St. Kitts", "St. Kitts and Nevis", "SKB"),
  new Airport("St. Louis (MO) Lambert–St. Louis International Airport", "USA", "STL"),
  new Airport("St. Lucia Hewanorra", "Saint Lucia", "UVF"),
  new Airport("St. Lucia Vigle", "Saint Lucia", "SLU"),
  new Airport("St. Marteen", "Netherlands Antilles", "SXM"),
  new Airport("St. Martin", "St. Martin (Guadeloupe)", "SFG"),
  new Airport("St. Petersburg (Leningrad) - Pulkovo", "Russia", "LED"),
  new Airport("St. Pierre, NF", "Canada", "FSP"),
  new Airport("St. Thomas", "Virgin Islands (U.S.)", "STT"),
  new Airport("St. Vincent", "Saint Vincent and the Grenadines", "SVD"),
  new Airport("Stansted (London)", "United Kingdom", "STN"),
  new Airport("State College/Belefonte (PA)", "USA", "SCE"),
  new Airport("Stavanger", "Norway", "SVG"),
  new Airport("Steamboat Springs (CO)", "USA", "HDN"),
  new Airport("Stettin", "Poland", "SZZ"),
  new Airport("Stockholm Metropolitan Area", "Sweden", "STO"),
  new Airport("Stockholm - Arlanda", "Sweden", "ARN"),
  new Airport("Stockholm - Bromma", "Sweden", "BMA"),
  new Airport("Stockton (CA)", "USA", "SCK"),
  new Airport("Stornway", "United Kingdom", "SYY"),
  new Airport("Strasbourg - Strasbourg Airport", "France", "SXB"),
  new Airport("Streaky Bay", "Australia", "KBY"),
  new Airport("Stuttgart - Echterdingen", "Germany", "STR"),
  new Airport("Sui", "Pakistan", "SUL"),
  new Airport("Sukkur", "Pakistan", "SKZ"),
  new Airport("Sumburgh (Shetland)", "United Kingdom", "LSI"),
  new Airport("Sun Valley (ID)", "USA", "SUN"),
  new Airport("Sundsvall", "Sweden", "SDL"),
  new Airport("Sunshine Coast", "Australia", "MCY"),
  new Airport("Surabaya - Juanda", "Indonesia", "SUB"),
  new Airport("Surat", "India", "STV"),
  new Airport("Suva - Nausori Airport (Luvuluvu)", "Fiji", "SUV"),
  new Airport("Swakopmund", "Namibia", "SWP"),
  new Airport("Sydney - Sydney Airport", "Australia", "SYD"),
  new Airport("Sylhet", "Bangladesh", "ZYL"),
  new Airport("Syracuse (NY)", "USA", "SYR"),
  new Airport("Tabuk", "Saudi Arabia", "TUU"),
  new Airport("Taif", "Saudi Arabia", "TIF"),
  new Airport("Taipei - Chiang Kai Shek", "Taiwan", "TPE"),
  new Airport("Taipei - Sung Shan", "Taiwan", "TAY"),
  new Airport("Taiyuan", "Shanxi, PR China", "TYN"),
  new Airport("Takamatsu", "Japan", "TAK"),
  new Airport("Talkeetna (AK)", "USA", "TKA"),
  new Airport("Tallahassee (FL)", "USA", "TLH"),
  new Airport("Tallinn - Pirita Harbour", "Estonia", "QUF"),
  new Airport("Tallinn - Ulemiste", "Estonia", "TLL"),
  new Airport("Tampa - International (FL)", "USA", "TPA"),
  new Airport("Tampere", "Finland", "TMP"),
  new Airport("Tampico - Gen. F. Javier Mina", "Mexico", "TAM"),
  new Airport("Tamworth", "Australia", "TMW"),
  new Airport("Tangier - Boukhalef", "Morocco", "TNG"),
  new Airport("Taree", "Australia", "TRO"),
  new Airport("Targovishte", "Bulgaria", "TGV"),
  new Airport("Tashkent - International", "Uzbekistan", "TAS"),
  new Airport("Tawau", "Malaysia", "TWU"),
  new Airport("Tbilisi - Novo Alexeyevka", "Georgia", "TBS"),
  new Airport("Te Anau", "New Zealand", "TEU"),
  new Airport("Teesside, Durham Tees Valley", "United Kingdom", "MME"),
  new Airport("Tegucigalpa", "Honduras", "TGU"),
  new Airport("Tehran (Teheran) - Mehrabad", "Iran", "THR"),
  new Airport("Tekirdag - Corlu", "Turkey", "TEQ"),
  new Airport("Tel Aviv - Ben Gurion International", "Israel", "TLV"),
  new Airport("Telluride (CO)", "USA", "TEX"),
  new Airport("Temora", "Australia", "TEM"),
  new Airport("Tenerife", "Spain", "TCI"),
  new Airport("Tenerife - Sur Reina Sofia", "Spain", "TFS"),
  new Airport("Tenerife - Norte Los Rodeos", "Spain", "TFN"),
  new Airport("Tennant Creek", "Australia", "TCA"),
  new Airport("Terceira", "Portugal", "TER"),
  new Airport("Teresina", "Brazil", "THE"),
  new Airport("Termez (Termes)", "Uzbekistan", "TMZ"),
  new Airport("Terrace", "Canada", "YXT"),
  new Airport("Terre Haute (IN)", "USA", "HUF"),
  new Airport("Texarkana (AR)", "USA", "TXK"),
  new Airport("Thaba'Nchu", "South Africa", "TCU"),
  new Airport("The Pas", "Canada", "YQD"),
  new Airport("Thessaloniki - Makedonia Apt.", "Greece", "SKG"),
  new Airport("Thief River Falls (MN)", "USA", "TVF"),
  new Airport("Thira", "Greece", "JTR"),
  new Airport("Thiruvananthapuram", "India", "TRV"),
  new Airport("Thisted", "Denmark", "TED"),
  new Airport("Thompson", "Canada", "YTH"),
  new Airport("Thorne Bay (AK)", "USA", "KTB"),
  new Airport("Thunder Bay", "Canada", "YQT"),
  new Airport("Thursday Island", "Australia", "TIS"),
  new Airport("Tianjin", "China", "TSN"),
  new Airport("Tijuana - Rodriguez", "Mexico", "TIJ"),
  new Airport("Tioman", "Indonesia", "TOD"),
  new Airport("Tirana - Rinas", "Albania", "TIA"),
  new Airport("Tiruchirapally", "India", "TRZ"),
  new Airport("Tivat", "Montenegro", "TIV"),
  new Airport("Tobago", "Trinidad and Tobago", "TAB"),
  new Airport("Tokushima", "Japan", "TKS"),
  new Airport("Tokyo", "Japan", "TYO"),
  new Airport("Tokyo - Haneda", "Japan", "HND"),
  new Airport("Tokyo - Narita", "Japan", "NRT"),
  new Airport("Toledo (OH)", "USA", "TOL"),
  new Airport("Tom Price", "Australia", "TPR"),
  new Airport("Toowoomba", "Australia", "TWB"),
  new Airport("Toronto - Billy Bishop Toronto City Airport", "Canada", "YTZ"),
  new Airport("Toronto - Toronto Pearson International Airport", "Canada", "YYZ"),
  new Airport("Toronto", "Canada", "YTO"),
  new Airport("Tortola", "British Virgin Islands", "TOV"),
  new Airport("Touho", "New Caledonia", "TOU"),
  new Airport("Toulouse - Blagnac Airport", "France", "TLS"),
  new Airport("Townsville", "Australia", "TSV"),
  new Airport("Toyama", "Japan", "TOY"),
  new Airport("Trabzon", "Turkey", "TZX"),
  new Airport("Trapani", "Italy", "TPS"),
  new Airport("Traverse City (MI)", "USA", "TVC"),
  new Airport("Treasure Cay", "Bahamas", "TCB"),
  new Airport("Trenton/Princeton (NJ)", "USA", "TTN"),
  new Airport("Treviso", "Italy", "TSF"),
  new Airport("Tri-Cities Regional (TN) /VA", "USA", "TRI"),
  new Airport("Trieste", "Italy", "TRS"),
  new Airport("Tripoli - Tripoli International", "Libya", "TIP"),
  new Airport("Tromsoe", "Norway", "TOS"),
  new Airport("Trondheim", "Norway", "TRD"),
  new Airport("Tsumeb", "Namibia", "TSB"),
  new Airport("Tucson (AZ)", "USA", "TUS"),
  new Airport("Tulepo (MS)", "USA", "TUP"),
  new Airport("Tulsa (OK)", "USA", "TUL"),
  new Airport("Tunis - Carthage", "Tunisia", "TUN"),
  new Airport("Turbat", "Pakistan", "TUK"),
  new Airport("Turin", "Italy", "TRN"),
  new Airport("Turku", "Finland", "TKU"),
  new Airport("Tuscaloosa (AL)", "USA", "TCL"),
  new Airport("Tuxtla Gutierrez", "Mexico", "TGZ"),
  new Airport("Twin Falls (ID)", "USA", "TWF"),
  new Airport("Tyler (TX)", "USA", "TYR"),
  new Airport("Ua Huka", "French Polynesia", "UAH"),
  new Airport("Ua Pou", "French Polynesia", "UAP"),
  new Airport("Ube", "Japan", "UBJ"),
  new Airport("Uberaba", "Brazil", "UBA"),
  new Airport("Uberlandia - Eduardo Gomes Airport", "Brazil", "UDI"),
  new Airport("Ubon Ratchathani - Muang Ubon Airport", "Thailand", "UBP"),
  new Airport("Udaipur - Dabok Airport", "India", "UDR"),
  new Airport("Uden - Volkel Airport", "Netherlands", "UDE"),
  new Airport("Udon Thani", "Thailand", "UTH"),
  new Airport("Ufa", "Russia", "UFA"),
  new Airport("Uherske Hradiste", "Czech Republic", "UHE"),
  new Airport("Uige", "Angola", "UGO"),
  new Airport("Ujung Pandang - Hasanudin Airport", "Indonesia", "UPG"),
  new Airport("Ukhta", "Russia", "UCT"),
  new Airport("Ukiah (CA)", "USA", "UKI"),
  new Airport("Ulaanbaatar - Buyant Uhaa Airport", "Mongolia", "ULN"),
  new Airport("Ulan-Ude", "Russia", "UUD"),
  new Airport("Ulanhot", "PR China", "HLH"),
  new Airport("Ulei", "Vanuatu", "ULB"),
  new Airport("Ulsan", "South Korea", "USN"),
  new Airport("Ulundi", "South Africa", "ULD"),
  new Airport("Umea", "Sweden", "UME"),
  new Airport("Umiujaq", "Canada", "YUD"),
  new Airport("Umtata", "South Africa", "UTT"),
  new Airport("Unalakleet (AK)", "USA", "UNK"),
  new Airport("Union Island", "Saint Vincent and the Grenadines", "UNI"),
  new Airport("Unst (Shetland Island) - Baltasound Airport", "United Kingdom", "UNT"),
  new Airport("Upala", "Costa Rica", "UPL"),
  new Airport("Upernavik - Upernavik Heliport", "Greenland", "JUV"),
  new Airport("Upington", "South Africa", "UTN"),
  new Airport("Upolu Point (HI)", "USA", "UPP"),
  new Airport("Uranium City", "Canada", "YBE"),
  new Airport("Urgench", "Uzbekistan", "UGC"),
  new Airport("Uriman", "Venezuela", "URM"),
  new Airport("Urmiehm (Orumieh)", "Iran", "OMH"),
  new Airport("Uruapan", "Mexico", "UPN"),
  new Airport("Urubupunga - Ernesto Pochler Airport", "Brazil", "URB"),
  new Airport("Uruguaiana - Ruben Berta Airport", "Brazil", "URG"),
  new Airport("Urumqi", "Xinjiang, PR China", "URC"),
  new Airport("Uruzgan", "Afghanistan", "URZ"),
  new Airport("Ushuaia - Islas Malvinas Airport", "Argentina", "USH"),
  new Airport("Utapao (Pattaya)", "Thailand", "UTP"),
  new Airport("Utica (NY) - Oneida County Airport", "USA", "UCA"),
  new Airport("Utila", "Honduras", "UII"),
  new Airport("Uummannaq", "Greenland", "UMD"),
  new Airport("Uzhgorod", "Ukraine", "UDJ"),
  new Airport("Vaasa", "Finland", "VAA"),
  new Airport("Vaexjoe", "Sweden", "VXO"),
  new Airport("Vail (CO)", "USA", "EGE"),
  new Airport("Val d'Or", "Canada", "YVO"),
  new Airport("Valdez (AK)", "USA", "VDZ"),
  new Airport("Valdosta (GA)", "USA", "VLD"),
  new Airport("Valencia", "Spain", "VLC"),
  new Airport("Valencia", "Venezuela", "VLN"),
  new Airport("Valladolid", "Spain", "VLL"),
  new Airport("Valparaiso", "Chile", "VAP"),
  new Airport("Valverde", "Spain", "VDE"),
  new Airport("Van - Ferit Melen", "Turkey", "VAN"),
  new Airport("Vancouver - Vancouver International", "Canada", "YVR"),
  new Airport("Varadero", "Cuba", "VRA"),
  new Airport("Varanasi", "India", "VNS"),
  new Airport("Varkaus", "Finland", "VRK"),
  new Airport("Varna", "Bulgaria", "VAR"),
  new Airport("Vasteras", "Sweden", "VST"),
  new Airport("Velikiye Luki (Welikije Luki)", "Russia", "VLU"),
  new Airport("Venice - Marco Polo", "Italy", "VCE"),
  new Airport("Veracruz", "Mexico", "VER"),
  new Airport("Vernal (UT)", "USA", "VEL"),
  new Airport("Vero Beach/Ft. Pierce (FL)", "USA", "VRB"),
  new Airport("Verona (Brescia) Montichiari", "Italy", "VBS"),
  new Airport("Verona", "Italy", "VRN"),
  new Airport("Victoria", "Canada", "YYJ"),
  new Airport("Victoria Falls", "Zimbabwe", "VFA"),
  new Airport("Vidin", "Bulgaria", "VID"),
  new Airport("Vientiane - Wattay", "Lao PDR", "VTE"),
  new Airport("Vigo", "Spain", "VGO"),
  new Airport("Villahermosa", "Mexico", "VSA"),
  new Airport("Vilnius", "Lithuania", "VNO"),
  new Airport("Virgin Gorda", "Virgin Islands (British)", "VIJ"),
  new Airport("Visalia (CA)", "USA", "VIS"),
  new Airport("Visby", "Sweden", "VBY"),
  new Airport("Vitoria", "Spain", "VIT"),
  new Airport("Vitoria - Eurico de Aguiar Salles Airport", "Brazil", "VIX"),
  new Airport("Vryheid", "South Africa", "VYD"),
  new Airport("Wabush", "Canada", "YWK"),
  new Airport("Waco (TX)", "USA", "ACT"),
  new Airport("Wagga", "Australia", "WGA"),
  new Airport("Walla Walla (WA)", "USA", "ALW"),
  new Airport("Wallis", "Wallis and Futuna Islands", "WLS"),
  new Airport("Walvis Bay", "South Africa", "WVB"),
  new Airport("Warrnambool", "Australia", "WMB"),
  new Airport("Warsaw - Frédéric Chopin", "Poland", "WAW"),
  new Airport("Washington DC - Baltimore Washington International", "USA", "BWI"),
  new Airport("Washington DC - Dulles International", "USA", "IAD"),
  new Airport("Washington DC - Ronald Reagan National", "USA", "DCA"),
  new Airport("Washington DC", "USA", "WAS"),
  new Airport("Waterloo IA", "USA", "ALO"),
  new Airport("Watertown (SD)", "USA", "ATY"),
  new Airport("Wausau/Stevens Point (WI)", "USA", "CWA"),
  new Airport("Weipa", "Australia", "WEI"),
  new Airport("Welkom", "South Africa", "WEL"),
  new Airport("Wellington", "New Zealand", "WLG"),
  new Airport("Wenatchee (WA)", "USA", "EAT"),
  new Airport("West Palm Beach (FL)", "USA", "PBI"),
  new Airport("West Yellowstone (MT)", "USA", "WYS"),
  new Airport("Westerland, Sylt Airport", "Germany", "GWT"),
  new Airport("Whakatane", "New Zealand", "WHK"),
  new Airport("Whale Cove, NT", "Canada", "YXN"),
  new Airport("Whangarei", "New Zealand", "WRE"),
  new Airport("White Plains (NY)", "USA", "HPN"),
  new Airport("Whitehorse", "Canada", "YXY"),
  new Airport("Whitsunday Resort", "Australia", "HAP"),
  new Airport("Whyalla", "Australia", "WYA"),
  new Airport("Wichita Falls (TX)", "USA", "SPS"),
  new Airport("Wichita (KS)", "USA", "ICT"),
  new Airport("Wick", "United Kingdom", "WIC"),
  new Airport("Wickham", "Australia", "WHM"),
  new Airport("Wien (Vienna) - Vienna International", "Austria", "VIE"),
  new Airport("Wiesbaden, Air Base", "Germany", "WIE"),
  new Airport("Wilkes Barre/Scranton (PA)", "USA", "AVP"),
  new Airport("Williamsport (PA)", "USA", "IPT"),
  new Airport("Williston (ND)", "USA", "ISL"),
  new Airport("Wilmington (NC)", "USA", "ILM"),
  new Airport("Wilna (Vilnius)", "Lithuania", "VNO"),
  new Airport("Wiluna", "Australia", "WUN"),
  new Airport("Windhoek - Eros", "Namibia", "ERS"),
  new Airport("Windhoek - Hosea Kutako International", "Namibia", "WDH"),
  new Airport("Windsor Ontario", "Canada", "YQG"),
  new Airport("Winnipeg International", "Canada", "YWG"),
  new Airport("Wolf Point (MT)", "USA", "OLF"),
  new Airport("Wollongong", "Australia", "WOL"),
  new Airport("Woomera", "Australia", "UMR"),
  new Airport("Worcester (MA)", "USA", "ORH"),
  new Airport("Worland (WY)", "USA", "WRL"),
  new Airport("Wrangell (AK)", "USA", "WRG"),
  new Airport("Wuhan", "Hubei, PR China", "WUH"),
  new Airport("Wyndham", "Australia", "WYN"),
  new Airport("Xiamen", "Fujian, PR China", "XMN"),
  new Airport("Xi'an - Xianyang", "Shaanxi, PR China", "XIY"),
  new Airport("Yakima (WA)", "USA", "YKM"),
  new Airport("Yakutat (AK)", "USA", "YAK"),
  new Airport("Yakutsk", "Russia", "YKS"),
  new Airport("Yamagata, Junmachi", "Japan", "GAJ"),
  new Airport("Yamoussoukro", "Côte d'Ivoire", "ASK"),
  new Airport("Yanbu", "Saudi Arabia", "YNB"),
  new Airport("Yangon (Rangoon) - Mingaladon", "Myanmar", "RGN"),
  new Airport("Yaounde", "Cameroon", "YAO"),
  new Airport("Yellowknife", "Canada", "YZF"),
  new Airport("Yekaterinburg - Koltsovo Airport", "Russia", "SVX"),
  new Airport("Yichang", "Hubei, PR China", "YIH"),
  new Airport("Yokohama", "Japan", "YOK"),
  new Airport("Yuma (AZ)", "USA", "YUM"),
  new Airport("Zacatecas", "Mexico", "ZCL"),
  new Airport("Zadar", "Croatia (Hrvatska)", "ZAD"),
  new Airport("Zagreb - Zagreb Airport Pleso", "Croatia (Hrvatska)", "ZAG"),
  new Airport("Zakynthos", "Greece", "ZTH"),
  new Airport("Zaragoza", "Spain", "ZAZ"),
  new Airport("Zhob", "Pakistan", "PZH"),
  new Airport("Zinder", "Niger", "ZND"),
  new Airport("Zouerate", "Mauritania", "OUZ"),
  new Airport("Zurich (Zürich) - Kloten", "Switzerland", "ZRH")
];
//
// const airports = [
//   "Aarhus\tDenmark\tAAR\n" +
//   "Abadan\tIran\tABD\n" +
//   "Abeche\tChad\tAEH\n" +
//   "Aberdeen\tUnited Kingdom\tABZ\n" +
//   "Aberdeen (SD)\tUSA\tABR\n" +
//   "Abidjan\tCote d'Ivoire\tABJ\n" +
//   "Abilene (TX)\tUSA\tABI\n" +
//   "Abu Dhabi - Abu Dhabi International\tUnited Arab Emirates\tAUH\n" +
//   "Abuja - Nnamdi Azikiwe International Airport\tNigeria\tABV\n" +
//   "Abu Rudeis\tEgypt\tAUE\n" +
//   "Abu Simbel\tEgypt\tABS\n" +
//   "Acapulco\tMexico\tACA\n" +
//   "Accra - Kotoka International Airport\tGhana\tACC\n" +
//   "Adana\tTurkey\tADA\n" +
//   "Addis Ababa - Bole International Airport\tEthiopia\tADD\n" +
//   "Adelaide\tAustralia\tADL\n" +
//   "Aden - Aden International Airport\tYemen\tADE\n" +
//   "Adiyaman\tTurkey\tADF\n" +
//   "Adler/Sochi\tRussia\tAER\n" +
//   "Agades\tNiger\tAJY\n" +
//   "Agadir\tMorocco\tAGA\n" +
//   "Agana (Hagåtña)\tGuam\tSUM\n" +
//   "Aggeneys\tSouth Africa\tAGZ\n" +
//   "Aguadilla\tPuerto Rico\tBQN\n" +
//   "Aguascaliente\tMexico\tAGU\n" +
//   "Ahmedabad\tIndia\tAMD\n" +
//   "Aiyura\tPapua New Guinea\tAYU\n" +
//   "Ajaccio\tFrance\tAJA\n" +
//   "Akita\tJapan\tAXT\n" +
//   "Akron (OH)\tUSA\tCAK\n" +
//   "Akrotiri - RAF\tCyprus\tAKT\n" +
//   "Al Ain\tUnited Arab Emirates\tAAN\n" +
//   "Al Arish\tEgypt\tAAC\n" +
//   "Albany\tAustralia\tALH\n" +
//   "Albany (GA)\tUSA\tABY\n" +
//   "Albany (NY) - Albany International Airport\tUSA\tALB\n" +
//   "Albi\tFrance\tLBI\n" +
//   "Alborg\tDenmark\tAAL\n" +
//   "Albuquerque (NM)\tUSA\tABQ\n" +
//   "Albury\tAustralia\tABX\n" +
//   "Alderney\tChannel Islands\tACI\n" +
//   "Aleppo\tSyria\tALP\n" +
//   "Alesund\tNorway\tAES\n" +
//   "Alexander Bay - Kortdoorn\tSouth Africa\tALJ\n" +
//   "Alexandria - Borg el Arab Airport\tEgypt\tHBH\n" +
//   "Alexandria - El Nhouza Airport\tEgypt\tALY\n" +
//   "Alexandria - Esler Field\tUSA (LA)\tESF\n" +
//   "Alfujairah (Fujairah)\tUnited Arab Emirates\tFJR\n" +
//   "Alghero Sassari\tItaly\tAHO\n" +
//   "Algiers, Houari Boumediene Airport\tAlgeria\tALG\n" +
//   "Al Hoceima\tMorocco\tAHU\n" +
//   "Alicante\tSpain\tALC\n" +
//   "Alice Springs\tAustralia\tASP\n" +
//   "Alldays\tSouth Africa\tADY\n" +
//   "Allentown (PA)\tUSA\tABE\n" +
//   "Almaty (Alma Ata) - Almaty International Airport\tKazakhstan\tALA\n" +
//   "Almeria\tSpain\tLEI\n" +
//   "Alta\tNorway\tALF\n" +
//   "Altay\tPR China\tAAT\n" +
//   "Altenrhein\tSwitzerland\tACH\n" +
//   "Altoona (PA)\tUSA\tAOO\n" +
//   "Altus\tUSA\tAXS\n" +
//   "Amami\tJapan\tASJ\n" +
//   "Amarillo (TX)\tUSA\tAMA\n" +
//   "Amazon Bay\tPapua New Guinea\tAZB\n" +
//   "Amman - Queen Alia International Airport\tJordan\tAMM\n" +
//   "Amman - Amman-Marka International Airport\tJordan\tADJ\n" +
//   "Amritsar\tIndia\tATQ\n" +
//   "Amsterdam - Amsterdam Airport Schiphol\tNetherlands\tAMS\n" +
//   "Anand\tIndia\tQNB\n" +
//   "Anchorage (AK) - Ted Stevens Anchorage International\tUSA\tANC\n" +
//   "Ancona - Ancona Falconara Airport\tItaly\tAOI\n" +
//   "Andorra La Vella - Heliport\tAndorra\tALV\n" +
//   "Anguilla\tAnguilla\tAXA\n" +
//   "Anjouan - Anjouan Airport\tComoros (Comores)\tAJN\n" +
//   "Ankara\tTurkey\tANK\n" +
//   "Ankara - Esenboğa International Airport\tTurkey\tESB\n" +
//   "Annaba\tAlgeria\tAAE\n" +
//   "Ann Arbor (MI)\tUSA\tARB\n" +
//   "Annecy\tFrance\tNCY\n" +
//   "Anniston (AL)\tUSA\tANB\n" +
//   "Antalya\tTurkey\tAYT\n" +
//   "Antananarivo (Tanannarive) - Ivato International Airport\tMadagascar\tTNR\n" +
//   "Antigua, V.C. Bird International\tAntigua and Barbuda\tANU\n" +
//   "Antwerp\tBelgium\tANR\n" +
//   "Aomori\tJapan\tAOJ\n" +
//   "Apia - Faleolo International Airport\tSamoa\tAPW\n" +
//   "Appelton/Neenah/Menasha (WI)\tUSA\tATW\n" +
//   "Aqaba\tJordan\tAQJ\n" +
//   "Aracaju\tBrazil\tAJU\n" +
//   "Arkhangelsk\tRussia\tARH\n" +
//   "Arusha\tTanzania\tARK\n" +
//   "Araxos\tGreece\tGPA\n" +
//   "Arlit\tNiger\tRLT\n" +
//   "Arrecife/Lanzarote\tSpain\tACE\n" +
//   "Aruba - Reina Beatrix International, Oranjestad\tAruba\tAUA\n" +
//   "Asheville (NC)\tUSA\tAVL\n" +
//   "Ashgabat - Saparmurat Turkmenbashy Int. Airport\tTurkmenistan\tASB\n" +
//   "Asmara - Asmara International\tEritrea\tASM\n" +
//   "Aspen, (CO) - Aspen-Pitkin County Airport\tUSA\tASE\n" +
//   "Assiut\tEgypt\tATZ\n" +
//   "Astana - Astana International Airport\tKazakhstan\tTSE\n" +
//   "Asuncion - Asunción International Airport\tParaguay\tASU\n" +
//   "Aswan - Daraw Airport\tEgypt\tASW\n" +
//   "Athens - Elefthérios Venizélos International Airport\tGreece\tATH\n" +
//   "Athens, Hellinikon Airport\tGreece\tHEW\n" +
//   "Athens (GA)\tUSA\tAHN\n" +
//   "Athens (OH)\tUSA\tATO\n" +
//   "Atlanta (GA) - Hartsfield Atlanta International Airport\tUSA\tATL\n" +
//   "Atlantic City (NJ) - Atlantic City International\tUSA\tACY\n" +
//   "Attawapiskat, NT\tCanada\tYAT\n" +
//   "Auckland - Auckland International Airport\tNew Zealand\tAKL\n" +
//   "Augsburg - Augsbur gAirport\tGermany\tAGB\n" +
//   "Augusta (GA)\tUSA\tAGS\n" +
//   "Augusta (ME) - Augusta State Airport\tUSA\tAUG\n" +
//   "Aurillac\tFrance\tAUR\n" +
//   "Austin (TX) - Austin-Bergstrom Airport\tUSA\tAUS\n" +
//   "Ayawasi\tIndonesia\tAYW\n" +
//   "Ayers Rock - Connellan\tAustralia\tAYQ\n" +
//   "Ayr\tAustralia\tAYR\n" +
//   " \n" +
//   "B\n" +
//   "Badajoz\tSpain\tBJZ\n" +
//   "Bagdad - Baghdad International Airport\tIraq\tBGW\n" +
//   "Bagdogra\tIndia\tIXB\n" +
//   "Bahamas - Lynden Pindling International Airport\tThe Bahamas\tNAS\n" +
//   "Bahawalpur\tPakistan\tBHV\n" +
//   "Bahrain - Bahrain International Airport\tBahrain\tBAH\n" +
//   "Bakersfield (CA)\tUSA\tBFL\n" +
//   "Baku - Heydar Aliyev International Airport\tAzerbaijan\tBAK\n" +
//   "Ballina\tAustralia\tBNK\n" +
//   "Baltimore (MD) - Washington International Airport\tUSA\tBWI\n" +
//   "Bamaga\tAustralia\tABM\n" +
//   "Bamako - Bamako-Sénou International Airport\tMali\tBKO\n" +
//   "Bambari\tCentral African Republic\tBBY\n" +
//   "Bandar Seri Begawan - Brunei International Airport\tBrunei\tBWN\n" +
//   "Bandung - Husein Sastranegara International Airport\tIndonesia\tBDO\n" +
//   "Bangalore\tIndia\tBLR\n" +
//   "Bangassou\tCentral African Republic\tBGU\n" +
//   "Bangkok, Don Muang\tThailand\tDMK\n" +
//   "Bangkok, Suvarnabhumi International\tThailand\tBKK\n" +
//   "Bangor (ME)\tUSA\tBGR\n" +
//   "Bangui - M'Poko International Airport\tCentral African Republic\tBGF\n" +
//   "Banjul - Banjul International Airport (Yundum International)\tGambia\tBJL\n" +
//   "Bannu\tPakistan\tBNP\n" +
//   "Barcelona\tSpain\tBCN\n" +
//   "Barcelona\tVenezuela\tBLA\n" +
//   "Bardufoss\tNorway\tBDU\n" +
//   "Bari\tItaly\tBRI\n" +
//   "Barisal\tBangladesh\tBZL\n" +
//   "Baroda\tIndia\tBDQ\n" +
//   "Barra (the famous tidal beach landing)\tUnited Kingdom\tBRR\n" +
//   "Barranquilla\tColombia\tBAQ\n" +
//   "Basel\tSwitzerland\tBSL\n" +
//   "Basel/Mulhouse\tSwitzerland/France\tEAP\n" +
//   "Basra, Basrah\tIraq\tBSR\n" +
//   "Basse-Terre - Pointe-à-Pitre International Airport\tGuadeloupe\tPTP\n" +
//   "Basseterre - Robert L. Bradshaw International Airport\tSaint Kitts and Nevis\tSKB\n" +
//   "Bastia\tFrance\tBIA\n" +
//   "Baton Rouge (LA) - Baton Rouge Metropolitan Airport\tUSA\tBTR\n" +
//   "Bayreuth - Bindlacher-Berg\tGermany\tBYU\n" +
//   "Beaumont/Pt. Arthur (TX)\tUSA\tBPT\n" +
//   "Beckley (WV)\tUSA\tBKW\n" +
//   "Beef Island - Terrance B. Lettsome\tVirgin Islands (British)\tEIS\n" +
//   "Beijing\tChina\tPEK\n" +
//   "Beijing - Nanyuan Airport\tChina\tNAY\n" +
//   "Beira\tMozambique\tBEW\n" +
//   "Beirut - Beirut Rafic Hariri International Airport\tLebanon\tBEY\n" +
//   "Belem - Val de Cans International Airport\tBrazil\tBEL\n" +
//   "Belfast - George Best Belfast City Airport\tUnited Kingdom\tBHD\n" +
//   "Belfast - Belfast International Airport\tUnited Kingdom\tBFS\n" +
//   "Belgaum\tIndia\tIXG\n" +
//   "Belgrad (Beograd) - Belgrade Nikola Tesla International\tSerbia\tBEG\n" +
//   "Belize City - Philip S.W.Goldson International\tBelize\tBZE\n" +
//   "Bellingham (WA)\tUSA\tBLI\n" +
//   "Belo Horizonte - Tancredo Neves International Airport\tBrazil\tCNF\n" +
//   "Bemidji (MN)\tUSA\tBJI\n" +
//   "Benbecula\tUnited Kingdom\tBEB\n" +
//   "Benghazi (Bengasi)\tLibya\tBEN\n" +
//   "Benguela\tAngola\tBUG\n" +
//   "Benton Harbour (MI)\tUSA\tBEH\n" +
//   "Berberati\tCentral African Republic\tBBT\n" +
//   "Bergamo/Milan - Orio Al Serio\tItaly\tBGY\n" +
//   "Bergen\tNorway\tBGO\n" +
//   "Bergerac - Roumanieres\tFrance\tEGC\n" +
//   "Berlin\tGermany\tBER\n" +
//   "Berlin, Schoenefeld\tGermany\tSXF\n" +
//   "Berlin, Tegel\tGermany\tTXL\n" +
//   "Berlin, Tempelhof (ceased operating in 2008)\tGermany\tTHF\n" +
//   "Bermuda - L.F. Wade International Airport\tBermuda\tBDA\n" +
//   "Berne, Bern-Belp\tSwitzerland\tBRN\n" +
//   "Berne, Railway Service\tSwitzerland\tZDJ\n" +
//   "Bethel (AK)\tUSA\tBET\n" +
//   "Bhopal\tIndia\tBHO\n" +
//   "Bhubaneswar\tIndia\tBBI\n" +
//   "Biarritz\tFrance\tBIQ\n" +
//   "Bilbao\tSpain\tBIO\n" +
//   "Billings (MT)\tUSA\tBIL\n" +
//   "Billund\tDenmark\tBLL\n" +
//   "Bintulu\tMalaysia\tBTU\n" +
//   "Biraro\tCentral African Republic\tIRO\n" +
//   "Birmingham - Birmingham International Airport\tUnited Kingdom\tBHX\n" +
//   "Birmingham (AL)\tUSA\tBHM\n" +
//   "Bishkek - Manas International Airport\tKyrgyzstan\tFRU\n" +
//   "Bismarck (ND) - Bismarck Municipal Airport\tUSA\tBIS\n" +
//   "Bissau - Osvaldo Vieiro International Airport\tGuinea-Bissau\tBXO\n" +
//   "Blackpool\tUnited Kingdom\tBLK\n" +
//   "Blackwater\tAustralia\tBLT\n" +
//   "Blantyre (Mandala) - Chileka International Airport\tMalawi\tBLZ\n" +
//   "Blenheim\tNew Zealand\tBHE\n" +
//   "Bloemfontein - Bloemfontein Airport\tSouth Africa\tBFN\n" +
//   "Bloomington (IL)\tUSA\tBMI\n" +
//   "Bloomington (IN)\tUSA\tBMG\n" +
//   "Bluefield (WV)\tUSA\tBLF\n" +
//   "Boa Vista\tBrazil\tBVB\n" +
//   "Bobo/Dioulasso\tBurkina Faso\tBOY\n" +
//   "Bodo\tNorway\tBOO\n" +
//   "Bodrum - Milas Airport\tTurkey\tBJV\n" +
//   "Bogota - El Nuevo Dorado International Airport\tColombia\tBOG\n" +
//   "Boise (ID) - Boise Air Terminal\tUSA\tBOI\n" +
//   "Bologna\tItaly\tBLQ\n" +
//   "Bombay (Mumbai) - Chhatrapati Shivaji International\tIndia\tBOM\n" +
//   "Bonaire\tNetherlands Antilles\tBON\n" +
//   "Bonaventure, PQ\tCanada\tYVB\n" +
//   "Bora Bora\tFrench Polynesia\tBOB\n" +
//   "Bordeaux - Bordeaux Airport\tFrance\tBOD\n" +
//   "Borrego Springs (CA)\tUSA\tBXS\n" +
//   "Boston (MA) - General Edward Lawrence Logan\tUSA\tBOS\n" +
//   "Bouake\tCote d'Ivoire\tBYK\n" +
//   "Bourgas/Burgas\tBulgaria\tBOJ\n" +
//   "Bournemouth\tUnited Kingdom\tBOH\n" +
//   "Bowen\tAustralia\tZBO\n" +
//   "Bozeman (MT)\tUSA\tBZN\n" +
//   "Bradford/Warren (PA) /Olean (NY)\tUSA\tBFD\n" +
//   "Brainerd (MN)\tUSA\tBRD\n" +
//   "Brampton Island\tAustralia\tBMP\n" +
//   "Brasilia - President Juscelino Kubitschek International\tBrazil\tBSB\n" +
//   "Bratislava - M. R. Štefánik Airport\tSlovakia\tBTS\n" +
//   "Brazzaville - Maya-Maya Airport\tCongo (ROC)\tBZV\n" +
//   "Bremen - Bremen Airport (Flughafen Bremen)\tGermany\tBRE\n" +
//   "Brescia, Montichiari\tItaly\tVBS\n" +
//   "Brest\tFrance\tBES\n" +
//   "Bria\tCentral African Republic\tBIV\n" +
//   "Bridgeport (CT)\tUSA\tBDR\n" +
//   "Bridgetown - Grantley Adams International\tBarbados\tBGI\n" +
//   "Brindisi\tItaly\tBDS\n" +
//   "Brisbane\tAustralia\tBNE\n" +
//   "Bristol\tUnited Kingdom\tBRS\n" +
//   "Broennoeysund\tNorway\tBNN\n" +
//   "Broken Hill\tAustralia\tBHQ\n" +
//   "Brookings (SD)\tUSA\tBKX\n" +
//   "Broome\tAustralia\tBME\n" +
//   "Brunswick (GA)\tUSA\tBQK\n" +
//   "Brussels - Brussels Airport\tBelgium\tBRU\n" +
//   "Bucaramanga\tColombia\tBGA\n" +
//   "Bucharest\tRomania\tBUH\n" +
//   "Bucharest - Henri Coandă International Airport\tRomania\tOTP\n" +
//   "Budapest - Budapest Ferihegy International Airport\tHungary\tBUD\n" +
//   "Buenos Aires\tArgentina\tBUE\n" +
//   "Buenos Aires, Ezeiza International Airport\tArgentina\tEZE\n" +
//   "Buenos Aires, Jorge Newbery\tArgentina\tAEP\n" +
//   "Buffalo Range\tZimbabwe\tBFO\n" +
//   "Buffalo/Niagara Falls (NY)\tUSA\tBUF\n" +
//   "Bujumbura - Bujumbura International Airport\tBurundi\tBJM\n" +
//   "Bulawayo\tZimbabwe\tBUQ\n" +
//   "Bullhead City (NV)\tUSA\tBHC\n" +
//   "Bundaberg\tAustralia\tBDB\n" +
//   "Burbank (CA)\tUSA\tBUR\n" +
//   "Burlington IA\tUSA\tBRL\n" +
//   "Burlington (VT)\tUSA\tBTV\n" +
//   "Burnie (Wynyard)\tAustralia\tBWT\n" +
//   "Butte (MT)\tUSA\tBTM\n" +
//   "\n" +
//   "Every once in a while go somewhere you have never been before.\n" +
//   "Anonymus\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "C\n" +
//   "Cabinda\tAngola\tCAB\n" +
//   "Cagliari\tItaly\tCAG\n" +
//   "Cairns\tAustralia\tCNS\n" +
//   "Cairo - Cairo International Airport\tEgypt\tCAI\n" +
//   "Calama - El Loa\tChile\tCJC\n" +
//   "Calcutta (Kolkata) - Netaji Subhas Chandra\tIndia\tCCU\n" +
//   "Calgary - Calgary International Airport\tCanada\tYYC\n" +
//   "Cali\tColombia\tCLO\n" +
//   "Calicut\tIndia\tCCJ\n" +
//   "Calvi\tFrance\tCLY\n" +
//   "Cambridge Bay\tCanada\tYCB\n" +
//   "Cambrigde\tUnited Kingdom\tCBG\n" +
//   "Campbeltown\tUnited Kingdom\tCAL\n" +
//   "Campo Grande\tBrazil\tCGR\n" +
//   "Canberra - Canberra Airport\tAustralia\tCBR\n" +
//   "Cancun\tMexico\tCUN\n" +
//   "Cannes – Mandelieu Airport\tFrance\tCEQ\n" +
//   "Canouan (island) - Canouan Airport\tSaint Vincent & the Grenadines\tCIW\n" +
//   "Cape Town - Cape Town International Airport\tSouth Africa\tCPT\n" +
//   "Caracas - Simón Bolívar International Airport\tVenezuela\tCCS\n" +
//   "Cardiff - Cardiff Airport\tUnited Kingdom\tCWL\n" +
//   "Carlsbad (CA)\tUSA\tCLD\n" +
//   "Carnarvon\tAustralia\tCVQ\n" +
//   "Carnot\tCentral African Republic\tCRF\n" +
//   "Carson City (NV)\tUSA\tCSN\n" +
//   "Casablanca\tMorocco\tCAS\n" +
//   "Casablanca, Mohamed V\tMorocco\tCMN\n" +
//   "Casa de Campo - La Romana International Airport\tDominican Republic\tLRM\n" +
//   "Casino\tAustralia\tCSI\n" +
//   "Casper (WY)\tUSA\tCPR\n" +
//   "Castaway\tFiji\tCST\n" +
//   "Cartagena - Rafael Núñez International Airport\tColombia\tCTG\n" +
//   "Castries - George F. L. Charles Airport\tSaint Lucia\tSLU\n" +
//   "Catania\tItaly\tCTA\n" +
//   "Cayenne - Cayenne-Rochambeau Airport\tFrench Guiana\tCAY\n" +
//   "Cottbus - Cottbus-Drewitz Airport\tGermany\tCBU\n" +
//   "Cebu City - Mactan-Cebu International\tPhilippines\tCEB\n" +
//   "Cedar City (UT)\tUSA\tCDC\n" +
//   "Cedar Rapids IA\tUSA\tCID\n" +
//   "Ceduna\tAustralia\tCED\n" +
//   "Cessnock\tAustralia\tCES\n" +
//   "Chabarovsk (Khabarovsk)\tRussia\tKHV\n" +
//   "Chambery\tFrance\tCMF\n" +
//   "Champaign (IL)\tUSA\tCMI\n" +
//   "Chandigarh - Chandigarh International Airport\tIndia\tIXC\n" +
//   "Changchun\tJilin, PR China\tCGQ\n" +
//   "Chania\tGreece\tCHQ\n" +
//   "Chaoyang, Beijing - Chaoyang Airport\tPR China\tCHG\n" +
//   "Charleston (SC)\tUSA\tCHS\n" +
//   "Charleston (WV) - Yeager Airport\tUSA\tCRW\n" +
//   "Charlotte (NC)\tUSA\tCLT\n" +
//   "Charlottesville (VA)\tUSA\tCHO\n" +
//   "Charters Towers\tAustralia\tCXT\n" +
//   "Chattanooga (TN)\tUSA\tCHA\n" +
//   "Chengdu - Shuangliu\tSichuan, PR China\tCTU\n" +
//   "Chennai (Madras)\tIndia\tMAA\n" +
//   "Cheyenne (WY) - Cheyenne Regional Airport\tUSA\tCYS\n" +
//   "Chiang Mai - Chiang Mai International Airport\tThailand\tCNX\n" +
//   "Chiba City\tJapan\tQCB\n" +
//   "Chicago (IL), Midway\tUSA\tMDW\n" +
//   "Chicago (IL), O'Hare International Airport\tUSA\tORD\n" +
//   "Chicago (IL)\tUSA\tCHI\n" +
//   "Chichen Itza\tMexico\tCZA\n" +
//   "Chico (CA)\tUSA\tCIC\n" +
//   "Chihuahua - Gen Fierro Villalobos\tMexico\tCUU\n" +
//   "Chios\tGreece\tJKH\n" +
//   "Chipata\tZambia\tCIP\n" +
//   "Chisinau - Chişinău International Airport\tMoldova\tKIV\n" +
//   "Chita (Tschita)\tRussia\tHTA\n" +
//   "Sapporo - New Chitose Airport\tJapan\tCTS\n" +
//   "Chitral\tPakistan\tCJL\n" +
//   "Chittagong\tBangladesh\tCGP\n" +
//   "Chongqing - Jiangbei International Airport\tSichuan, PR China\tCKG\n" +
//   "Christchurch\tNew Zealand\tCHC\n" +
//   "Chub Cay\tBahamas\tCCZ\n" +
//   "Churchill\tCanada\tYYQ\n" +
//   "Cienfuegos - Jaime González Airport\tCuba\tCFG\n" +
//   "Cincinnati (OH) - Cincinnati/Northern Kentucky Int'l\tUSA\tCVG\n" +
//   "Ciudad Del Carmen\tMexico\tCME\n" +
//   "Ciudad Guayana\tVenezuela\tCGU\n" +
//   "Ciudad Juarez\tMexico\tCJS\n" +
//   "Ciudad Obregon\tMexico\tCEN\n" +
//   "Ciudad Victoria\tMexico\tCVM\n" +
//   "Clarksburg (WV)\tUSA\tCKB\n" +
//   "Clermont\tAustralia\tCMQ\n" +
//   "Clermont Ferrand\tFrance\tCFE\n" +
//   "Cleveland (OH) , Burke Lakefront\tUSA\tBKL\n" +
//   "Cleveland (OH) - Cleveland Hopkins International\tUSA\tCLE\n" +
//   "Cochabamba\tBolivia\tCBB\n" +
//   "Cochin\tIndia\tCOK\n" +
//   "Cody/Powell/Yellowstone (WY)\tUSA\tCOD\n" +
//   "Coffmann Cove (AK)\tUSA\tKCC\n" +
//   "Coffs Harbour\tAustralia\tCFS\n" +
//   "Coimbatore\tIndia\tCJB\n" +
//   "Colima\tMexico\tCLQ\n" +
//   "College Station/Bryan (TX)\tUSA\tCLL\n" +
//   "Collinsville\tAustralia\tKCE\n" +
//   "Cologne - Cologne Airport (Flughafen Köln/Bonn)\tGermany\tCGN\n" +
//   "Colombo - Bandaranaike International Airport\tSri Lanka\tCMB\n" +
//   "Colorado Springs (CO)\tUSA\tCOS\n" +
//   "Columbia (SC) - Columbia Metropolitan Airport\tUSA\tCAE\n" +
//   "Columbus (GA)\tUSA\tCSG\n" +
//   "Columbus (OH) - Port Columbus International\tUSA\tCMH\n" +
//   "Conakry - Conakry International Airport\tGuinea\tCKY\n" +
//   "Concord (CA) - Buchanan Field\tUSA\tCCR\n" +
//   "Concord (NH) - Concord Municipal Airport\tUSA\tCON\n" +
//   "Constantine\tAlgeria\tCZL\n" +
//   "Constanta (Constanța) - Constanta Int'l Airport\tRomania\tCND\n" +
//   "Coober Pedy\tAustralia\tCPD\n" +
//   "Cooktown\tAustralia\tCTN\n" +
//   "Cooma\tAustralia\tOOM\n" +
//   "Copenhagen - Copenhagen Airport\tDenmark\tCPH\n" +
//   "Cordoba\tArgentina\tCOR\n" +
//   "Cordoba\tSpain\tODB\n" +
//   "Cordova (AK)\tUSA\tCDV\n" +
//   "Corfu\tGreece\tCFU\n" +
//   "Cork\tIreland\tORK\n" +
//   "Corpus Christi (TX)\tUSA\tCRP\n" +
//   "Cotonou - Cotonou Cadjehoun Airport\tBenin\tCOO\n" +
//   "Coventry - Baginton\tUnited Kingdom\tCVT\n" +
//   "Cozmel\tMexico\tCZM\n" +
//   "Craig (AK)\tUSA\tCGA\n" +
//   "Crescent City (CA)\tUSA\tCEC\n" +
//   "Cuiaba - Marechal Rondon International Airport\tBrazil\tCGB\n" +
//   "Culiacan\tMexico\tCUL\n" +
//   "Curacao - Curaçao International Airport\tNetherlands Antilles\tCUR\n" +
//   "Curitiba - Afonso Pena International Airport\tBrazil\tCWB\n" +
//   "Cuyo\tPhilippines\tCYU\n" +
//   " \n" +
//   "D\n" +
//   "Dakar - Léopold Sédar Senghor International Airport\tSenegal\tDKR\n" +
//   "Dalaman\tTurkey\tDLM\n" +
//   "Dalby\tAustralia\tDBY\n" +
//   "Dalian - Zhoushuizi International Airport\tLiaoning, PR China\tDLC\n" +
//   "Dallas (TX) , Love Field\tUSA\tDAL\n" +
//   "Dallas/Ft. Worth (TX) - Dallas/Fort Worth International\tUSA\tDFW\n" +
//   "Daloa\tCote d'Ivoire\tDJO\n" +
//   "Damascus, International\tSyria\tDAM\n" +
//   "Dammam, King Fahad International\tSaudi Arabien\tDMM\n" +
//   "Danville (VA)\tUSA\tDAN\n" +
//   "Dar es Salam (Daressalam) - Julius Nyerere Int'l\tTanzania\tDAR\n" +
//   "Darwin\tAustralia\tDRW\n" +
//   "Daydream Island\tAustralia\tDDI\n" +
//   "Dayton (OH)\tUSA\tDAY\n" +
//   "Daytona Beach (FL)\tUSA\tDAB\n" +
//   "Decatur (IL)\tUSA\tDEC\n" +
//   "Deer Lake/Corner Brook\tCanada\tYDF\n" +
//   "Delhi - Indira Gandhi International Airport\tIndia\tDEL\n" +
//   "Den Haag (The Hague)\tNetherlands\tHAG\n" +
//   "Denizli\tTurkey\tDNZ\n" +
//   "Denpasar/Bali\tIndonesia\tDPS\n" +
//   "Denver (CO) - Denver International Airport\tUSA\tDEN\n" +
//   "Dera Ismail Khan - Dera Ismail Khan Airport\tPakistan\tDSK\n" +
//   "Derby\tAustralia\tDRB\n" +
//   "Derry (Londonderry)\tUnited Kingdom\tLDY\n" +
//   "Des Moines (IA) - Des Moines International Airport\tUSA\tDSM\n" +
//   "Detroit (MI) , Coleman A. Young Municipal\tUSA\tDET\n" +
//   "Detroit (MI) , Wayne County Airport\tUSA\tDTW\n" +
//   "Detroit (MI) , Metropolitan Area\tUSA\tDTT\n" +
//   "Devils Lake (ND)\tUSA\tDVL\n" +
//   "Devonport\tAustralia\tDPO\n" +
//   "Dhahran\tSaudi Arabia\tDHA\n" +
//   "Dhaka - Zia International Airport\tBangladesh\tDAC\n" +
//   "Dili - Nicolau Lobato International Airport\tTimor Leste (East Timor)\tDIL\n" +
//   "Dillingham (AK)\tUSA\tDLG\n" +
//   "Dinard\tFrance\tDNR\n" +
//   "Disneyland Paris\tFrance\tDLP\n" +
//   "Djerba\tTunisia\tDJE\n" +
//   "Djibouti (city) - Djibouti-Ambouli International Airport\tDjibouti\tJIB\n" +
//   "Dodoma - Dodoma Airport\tTanzania\tDOD\n" +
//   "Doha - Doha International Airport\tQatar\tDOH\n" +
//   "Doncaster/Sheffield, Robin Hood International Airport\tUnited Kingdom\tDSA\n" +
//   "Donegal (Carrickfin)\tIreland\tCFN\n" +
//   "Dortmund\tGermany\tDTM\n" +
//   "Dothan (AL)\tUSA\tDHN\n" +
//   "Douala\tCameroon\tDLA\n" +
//   "Dresden - Dresden Airport\tGermany\tDRS\n" +
//   "Dubai - Dubai International Airport\tUnited Arab Emirates\tDXB\n" +
//   "Dubbo\tAustralia\tDBO\n" +
//   "Dublin - Dublin International Airport\tIreland\tDUB\n" +
//   "Dubois (PA)\tUSA\tDUJ\n" +
//   "Dubrovnik\tCroatia (Hrvatska)\tDBV\n" +
//   "Dubuque IA\tUSA\tDBQ\n" +
//   "Duesseldorf - Düsseldorf International Airport\tGermany\tDUS\n" +
//   "Duluth (MN) /Superior (WI)\tUSA\tDLH\n" +
//   "Dundee\tUnited Kingdom\tDND\n" +
//   "Dunedin\tNew Zealand\tDUD\n" +
//   "Dunk Island\tAustralia\tDKI\n" +
//   "Durango (CO)\tUSA\tDRO\n" +
//   "Durban\tSouth Africa\tDUR\n" +
//   "Dushanbe (Duschanbe) - Dushanbe Airport\tTajikistan\tDYU\n" +
//   "Dutch Harbor (AK)\tUSA\tDUT\n" +
//   "Dysart\tAustralia\tDYA\n" +
//   "Dzaoudzi\tMayotte\tDZA\n" +
//   "\n" +
//   "Excuse me while I kiss the sky.\n" +
//   "Jimi Hendrix (Purple Haze)\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "E\n" +
//   "East London\tSouth Africa\tELS\n" +
//   "Easter Island\tChile\tIPC\n" +
//   "Eau Clarie (WI)\tUSA\tEAU\n" +
//   "Edinburgh - Edinburgh Airport\tScotland, UK\tEDI\n" +
//   "Edmonton\tCanada\tYEA\n" +
//   "Edmonton, International\tCanada\tYEG\n" +
//   "Edmonton, Municipal\tCanada\tYXD\n" +
//   "Egilsstadir\tIceland\tEGS\n" +
//   "Eindhoven\tNetherlands\tEIN\n" +
//   "Samana - Samaná El Catey International Airport\tDominican Republic\tAZS\n" +
//   "Elba Island, Marina Di Campo\tItaly\tEBA\n" +
//   "Elat\tIsrael\tETH\n" +
//   "Elat, Ovula\tIsrael\tVDA\n" +
//   "Elkhart (IN)\tUSA\tEKI\n" +
//   "Elko (NV)\tUSA\tEKO\n" +
//   "Ellisras\tSouth Africa\tELL\n" +
//   "El Minya\tEgypt\tEMY\n" +
//   "Elmira (NY)\tUSA\tELM\n" +
//   "El Paso (TX) - El Paso International Airport\tUSA\tELP\n" +
//   "Ely (NV)\tUSA\tELY\n" +
//   "Emerald\tAustralia\tEDR\n" +
//   "Emerald\tAustralia\tEMD\n" +
//   "Enontekioe\tFinland\tENF\n" +
//   "Entebbe - Entebbe International Airport\tUganda\tEBB\n" +
//   "Erfurt - Erfurt Airport (Flughafen Erfurt)\tGermany\tERF\n" +
//   "Erie (PA)\tUSA\tERI\n" +
//   "Eriwan (Yerevan, Jerevan)\tArmenia\tEVN\n" +
//   "Erzincan\tTurkey\tERC\n" +
//   "Erzurum\tTurkey\tERZ\n" +
//   "Esbjerg\tDenmark\tEBJ\n" +
//   "Escanaba (MI)\tUSA\tESC\n" +
//   "Esperance\tAustralia\tEPR\n" +
//   "Eugene (OR)\tUSA\tEUG\n" +
//   "Eureka (CA)\tUSA\tACV\n" +
//   "Evansville (IN)\tUSA\tEVV\n" +
//   "Evenes\tNorway\tEVE\n" +
//   "Exeter\tUnited Kingdom\tEXT\n" +
//   " \n" +
//   "F\n" +
//   "Fairbanks (AK)\tUSA\tFAI\n" +
//   "Fair Isle (Shetland)\tUnited Kingdom\tFIE\n" +
//   "Faisalabad\tPakistan\tLYP\n" +
//   "Fargo (ND) (MN)\tUSA\tFAR\n" +
//   "Farmington (NM)\tUSA\tFMN\n" +
//   "Faro\tPortugal\tFAO\n" +
//   "Faroer - Vágar Airport\tDenmark\tFAE\n" +
//   "Fayetteville (AR)\tUSA\tFYV\n" +
//   "Fayetteville/Ft. Bragg (NC)\tUSA\tFAY\n" +
//   "Fes\tMorocco\tFEZ\n" +
//   "Figari\tFrance\tFSC\n" +
//   "Flagstaff (AZ)\tUSA\tFLG\n" +
//   "Flin Flon\tCanada\tYFO\n" +
//   "Flint (MI)\tUSA\tFNT\n" +
//   "Florence (Firenze) - Peretola Airport\tItaly\tFLR\n" +
//   "Florence (SC)\tUSA\tFLO\n" +
//   "Florianopolis\tBrazil\tFLN\n" +
//   "Floro\tNorway\tFRO\n" +
//   "Fort Albert\tCanada\tYFA\n" +
//   "Fortaleza - Pinto Martins Airport\tBrazil\tFOR\n" +
//   "Fort de France - Martinique Aimé Césaire International\tMartinique\tFDF\n" +
//   "Fort Dodge IA\tUSA\tFOD\n" +
//   "Fort Huachuca/Sierra Vista (AZ)\tUSA\tFHU\n" +
//   "Fort Lauderdale/Hollywood (FL)\tUSA\tFLL\n" +
//   "Fort McMurray\tCanada\tYMM\n" +
//   "Fort Myers, Metropolitan Area (FL)\tUSA\tFMY\n" +
//   "Fort Myers, Southwest Florida Reg (FL)\tUSA\tRSW\n" +
//   "Fort Riley (KS) - Marshall AAF\tUSA\tFRI\n" +
//   "Fort Smith\tCanada\tYSM\n" +
//   "Fort Smith (AR)\tUSA\tFSM\n" +
//   "Fort St. John\tCanada\tYXJ\n" +
//   "Fort Walton Beach (FL)\tUSA\tVPS\n" +
//   "Fort Wayne (IN)\tUSA\tFWA\n" +
//   "Fort Worth (TX) - Dallas/Fort Worth International Airport\tUSA\tDFW\n" +
//   "Foula (Shetland)\tUnited Kingdom\tFOU\n" +
//   "Francistown\tBotswana\tFRW\n" +
//   "Frankfurt/Main - Frankfurt Airport (Rhein-Main-Flughafen)\tGermany\tFRA\n" +
//   "Frankfurt/Hahn\tGermany\tHHN\n" +
//   "Franklin/Oil City (PA)\tUSA\tFKL\n" +
//   "Fredericton\tCanada\tYFC\n" +
//   "Freeport - Grand Bahama International Airport\tBahamas\tFPO\n" +
//   "Freetown - Freetown-Lungi International Airport\tSierra Leone\tFNA\n" +
//   "Frejus\tFrance\tFRJ\n" +
//   "Fresno (CA)\tUSA\tFAT\n" +
//   "Friedrichshafen - Bodensee-Airport Friedrichshafen\tGermany\tFDH\n" +
//   "Fuerteventura\tSpain\tFUE\n" +
//   "Fujairah, International Airport\tUnited Arab Emirates\tFJR\n" +
//   "Fukuoka\tJapan\tFUK\n" +
//   "Fukushima - Fukushima Airport\tJapan\tFKS\n" +
//   "Funchal\tPortugal\tFNC\n" +
//   "Futuna\tWallis and Futuna Islands\tFUT\n" +
//   "\n" +
//   "If you think adventure is dangerous, try routine; it is lethal.\n" +
//   "Paulo Coelho\n" +
//   "\n" +
//   " \n" +
//   "G\n" +
//   "Gaborone - Sir Seretse Khama International Airport\tBotswana\tGBE\n" +
//   "Gadsden (AL)\tUSA\tGAD\n" +
//   "Gainesville (FL)\tUSA\tGNV\n" +
//   "Galway\tIreland\tGWY\n" +
//   "Gander\tCanada\tYQX\n" +
//   "Garoua\tCameroon\tGOU\n" +
//   "Gaza City - Gaza International Airport\tPalestinian Territory\tGZA\n" +
//   "Gaziantep\tTurkey\tGZT\n" +
//   "Gdansk\tPoland\tGDN\n" +
//   "Geelong\tAustralia\tGEX\n" +
//   "Geneva - Geneva-Cointrin International Airport\tSwitzerland\tGVA\n" +
//   "Genoa\tItaly\tGOA\n" +
//   "George\tSouth Africa\tGRJ\n" +
//   "Georgetown - Cheddi Jagan International Airport\tGuyana\tGEO\n" +
//   "Geraldton\tAustralia\tGET\n" +
//   "Gerona\tSpain\tGRO\n" +
//   "Ghent (Gent)\tBelgium\tGNE\n" +
//   "Gibraltar\tGibraltar\tGIB\n" +
//   "Gilette (WY)\tUSA\tGCC\n" +
//   "Gilgit\tPakistan\tGIL\n" +
//   "Gillam\tCanada\tYGX\n" +
//   "Gladstone\tAustralia\tGLT\n" +
//   "Glasgow, Prestwick\tUnited Kingdom\tPIK\n" +
//   "Glasgow\tUnited Kingdom\tGLA\n" +
//   "Glasgow (MT)\tUSA\tGGW\n" +
//   "Glendive (MT)\tUSA\tGDV\n" +
//   "Goa\tIndia\tGOI\n" +
//   "Goiania, Santa Genoveva Airport\tBrazil\tGYN\n" +
//   "Gold Coast\tAustralia\tOOL\n" +
//   "Goondiwindi\tAustralia\tGOO\n" +
//   "Goose Bay\tCanada\tYYR\n" +
//   "Gorna\tBulgaria\tGOZ\n" +
//   "Gothenburg (Göteborg) - Landvetter\tSweden\tGOT\n" +
//   "Gove (Nhulunbuy)\tAustralia\tGOV\n" +
//   "Govenors Harbour\tBahamas\tGHB\n" +
//   "Granada\tSpain\tGRX\n" +
//   "Grand Bahama International\tBahamas\tFPO\n" +
//   "Grand Canyon (AZ)\tUSA\tGCN\n" +
//   "Grand Cayman - Owen Roberts International\tCayman Islands\tGCM\n" +
//   "Grand Forks (ND)\tUSA\tGFK\n" +
//   "Grand Junction (CO)\tUSA\tGJT\n" +
//   "Grand Rapids (MI)\tUSA\tGRR\n" +
//   "Grand Rapids (MN)\tUSA\tGPZ\n" +
//   "Graz\tAustria\tGRZ\n" +
//   "Great Falls (MT)\tUSA\tGTF\n" +
//   "Great Keppel Island\tAustralia\tGKL\n" +
//   "Green Bay (WI)\tUSA\tGRB\n" +
//   "Greenbrier/Lewisburg (WV)\tUSA\tLWB\n" +
//   "Greensboro/Winston Salem (NC)\tUSA\tGSO\n" +
//   "Greenville (MS)\tUSA\tGLH\n" +
//   "Greenville (NC)\tUSA\tPGV\n" +
//   "Greenville/Spartanburg (SC)\tUSA\tGSP\n" +
//   "Grenada - Point Salines Airport also Maurice Bishop\tGrenada\tGND\n" +
//   "Grenoble\tFrance\tGNB\n" +
//   "Griffith\tAustralia\tGFF\n" +
//   "Groningen - Eelde\tNetherlands\tGRQ\n" +
//   "Groote Eylandt - Alyangula\tAustralia\tGTE\n" +
//   "Groton/New London (CT)\tUSA\tGON\n" +
//   "Guadalajara\tMexico\tGDL\n" +
//   "Guadalcanal\tSolomon Islands\tGSI\n" +
//   "Guam\tGuam\tGUM\n" +
//   "Guangzhou (Canton) - Baiyun International Airport\tGuangdong, PR China\tCAN\n" +
//   "Sao Paulo - Guarulhos International\tBrazil\tGRU\n" +
//   "Guatemala City - La Aurora International Airport\tGuatemala\tGUA\n" +
//   "Guayaquil - Simon Bolivar\tEcuador\tGYE\n" +
//   "Guernsey\tChannel Islands\tGCI\n" +
//   "Guettin\tGermany\tGTI\n" +
//   "Gulfport/Biloxi (MS)\tUSA\tGPT\n" +
//   "Guilin - Liangjiang\tGuangxi, PR China\tKWL\n" +
//   "Gulu\tUganda\tULU\n" +
//   "Gunnison/Crested Butte (CO)\tUSA\tGUC\n" +
//   "Guwahati\tIndia\tGAU\n" +
//   "Gwadar\tPakistan\tGWD\n" +
//   "Gweru\tZimbabwe\tGWE\n" +
//   "Gympie\tAustralia\tGYP\n" +
//   " \n" +
//   "H\n" +
//   "Hachijo Jima\tJapan\tHAC\n" +
//   "Hagåtña - Guam International Airport\tGuam\tGUM\n" +
//   "Haifa\tIsrael\tHFA\n" +
//   "Haines (AK)\tUSA\tHNS\n" +
//   "Hakodate\tJapan\tHKD\n" +
//   "Halifax International\tCanada\tYHZ\n" +
//   "Hall Beach\tCanada\tYUX\n" +
//   "Hamburg - Fuhlsbuettel\tGermany\tHAM\n" +
//   "Hamilton\tAustralia\tHLT\n" +
//   "Hamilton\tCanada\tYHM\n" +
//   "Hamilton\tNew Zealand\tHLZ\n" +
//   "Hamilton Island\tAustralia\tHTI\n" +
//   "Hammerfest\tNorway\tHFT\n" +
//   "Hancock (MI)\tUSA\tCMX\n" +
//   "Hangchow (Hangzhou)\tZhejiang, PR China\tHGH\n" +
//   "Hannover\tGermany\tHAJ\n" +
//   "Hanoi - Noi Bai International Airport\tVietnam\tHAN\n" +
//   "Harare - Harare International Airport\tZimbabwe\tHRE\n" +
//   "Harbin (Haerbin)\tHeilongjiang, PR China\tHRB\n" +
//   "Harlingen/South Padre Island (TX)\tUSA\tHRL\n" +
//   "Harrington Harbour, PQ\tCanada\tYHR\n" +
//   "Harrisburg (PA) - Harrisburg Skyport\tUSA\tHAR\n" +
//   "Harrisburg (PA) - Harrisburg International\tUSA\tMDT\n" +
//   "Hartford (CT) /Springfield (MA)\tUSA\tBDL\n" +
//   "Hatyai (Hat Yai)\tThailand\tHDY\n" +
//   "Haugesund\tNorway\tHAU\n" +
//   "Havana - José Martí International\tCuba\tHAV\n" +
//   "Havre (MT)\tUSA\tHVR\n" +
//   "Hayman Island\tAustralia\tHIS\n" +
//   "Helena (MT)\tUSA\tHLN\n" +
//   "Helsingborg\tSweden\tJHE\n" +
//   "Helsinki - Vantaa\tFinland\tHEL\n" +
//   "Heraklion\tGreece\tHER\n" +
//   "Hermosillo - Gen. Pesqueira Garcia\tMexico\tHMO\n" +
//   "Hervey Bay\tAustralia\tHVB\n" +
//   "Hibbing (MN)\tUSA\tHIB\n" +
//   "Hickory (NC)\tUSA\tHKY\n" +
//   "Hilo (HI)\tUSA\tITO\n" +
//   "Hilton Head Island (SC)\tUSA\tHHH\n" +
//   "Hinchinbrook Island\tAustralia\tHNK\n" +
//   "Hiroshima International\tJapan\tHIJ\n" +
//   "Ho Chi Minh City (Saigon) - Tan Son Nhat International\tViet Nam\tSGN\n" +
//   "Hobart\tAustralia\tHBA\n" +
//   "Hof\tGermany\tHOQ\n" +
//   "Holguin\tCuba\tHOG\n" +
//   "Home Hill\tAustralia\tHMH\n" +
//   "Homer (AK)\tUSA\tHOM\n" +
//   "Hong Kong - International Airport (HKIA)\tHong Kong\tHKG\n" +
//   "Hong Kong - Chek Lap Kok\tHong Kong\tZJK\n" +
//   "Honiara Henderson International\tSolomon Islands\tHIR\n" +
//   "Honolulu (HI) - Honolulu International Airport\tUSA\tHNL\n" +
//   "Hoonah (AK)\tUSA\tHNH\n" +
//   "Horta\tPortugal\tHOR\n" +
//   "Houston (TX) , Hobby\tUSA\tHOU\n" +
//   "Houston, TX - George Bush Intercontinental Airport\tUSA\tIAH\n" +
//   "Huahine\tFrench Polynesia\tHUH\n" +
//   "Huatulco\tMexico\tHUX\n" +
//   "Hue - Phu Bai\tViet Nam\tHUI\n" +
//   "Humberside\tUnited Kingdom\tHUY\n" +
//   "Huntington (WV)\tUSA\tHTS\n" +
//   "Huntsville (AL)\tUSA\tHSV\n" +
//   "Hurghada International\tEgypt\tHRG\n" +
//   "Huron (SD)\tUSA\tHON\n" +
//   "Hwange National Park\tZimbabwe\tHWN\n" +
//   "Hyannis (MA)\tUSA\tHYA\n" +
//   "Hydaburg (AK)\tUSA\tHYG\n" +
//   "Hyderabad - Rajiv Gandhi International Airport\tIndia\tHYD\n" +
//   "Hyderabad\tPakistan\tHDD\n" +
//   " \n" +
//   "I\n" +
//   "Ibiza\tIbiza/Spain\tIBZ\n" +
//   "Idaho Falls (ID)\tUSA\tIDA\n" +
//   "Iguazu, Cataratas\tArgentina\tIGR\n" +
//   "Ile des Pins\tNew Caledonia\tILP\n" +
//   "Ile Ouen\tNew Caledonia\tIOU\n" +
//   "Iliamna (AK)\tUSA\tILI\n" +
//   "Imperial (CA)\tUSA\tIPL\n" +
//   "Incercargill\tNew Zealand\tIVC\n" +
//   "Incheon, Incheon International Airport\tKorea South\tICN\n" +
//   "Indianapolis (IN) International\tUSA\tIND\n" +
//   "Ingham\tAustralia\tIGH\n" +
//   "Innisfail\tAustralia\tIFL\n" +
//   "Innsbruck - Kranebitten\tAustria\tINN\n" +
//   "International Falls (MN)\tUSA\tINL\n" +
//   "Inuvik\tCanada\tYEV\n" +
//   "Invercargill\tNew Zealand\tIVC\n" +
//   "Inverness\tUnited Kingdom\tINV\n" +
//   "Inykern (CA)\tUSA\tIYK\n" +
//   "Iqaluit (Frobisher Bay)\tCanada\tYFB\n" +
//   "Iquitos\tPeru\tIQT\n" +
//   "Irkutsk\tRussia\tIKT\n" +
//   "Ishigaki - New Ishigaki Airport\tJapan\tISG\n" +
//   "Islamabad - Benazir Bhutto International Airport\tPakistan\tISB\n" +
//   "Islay\tUnited Kingdom\tILY\n" +
//   "Isle of Man\t \tIOM\n" +
//   "Istanbul - Istanbul Atatürk Airport\tTurkey\tIST\n" +
//   "Istanbul - Sabiha Gokcen\tTurkey\tSAW\n" +
//   "Ithaca/Cortland (NY)\tUSA\tITH\n" +
//   "Ivalo\tFinland\tIVL\n" +
//   "Ixtapa/Zihuatenejo\tMexico\tZIH\n" +
//   "Izmir\tTurkey\tIZM\n" +
//   "Izmir - Adnan Menderes Airport\tTurkey\tADB\n" +
//   "\n" +
//   "Travel makes one modest. You see what a tiny place you occupy in the world.\n" +
//   "Gustave Flaubert\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "J\n" +
//   "Jackson Hole (WY)\tUSA\tJAC\n" +
//   "Jackson (MI) - Reynolds Municipal\tUSA\tJXN\n" +
//   "Jackson,  MN  \tUSA\tMJQ\n" +
//   "Jackson (MS) - Jackson Internationall\tUSA\tJAN\n" +
//   "Jackson (MS) - Hawkins Field   \tUSA\tHKS\n" +
//   "Jackson (TN) - Mckellar\tUSA\tMKL\n" +
//   "Jackson Hole (WY)\tUSA\tJAC\n" +
//   "Jacksonville (AR)  Little Rock AFB   \tUSA\tLRF\n" +
//   "Jacksonville (FL) - Cecil Field NAS   \tUSA\tNZC\n" +
//   "Jacksonville (FL) Jacksonville NAS   \tUSA\tNIP\n" +
//   "Jacksonville (FL) - International\tUSA\tJAX\n" +
//   "Jacksonville (FL) - Craig Municipal   \tUSA\tCRG\n" +
//   "Jacksonville (IL) - Municipal Airport\tUSA\tIJX\n" +
//   "Jacksonville (NC)\tUSA\tOAJ\n" +
//   "Jacksonville (TX)\tUSA\tJKV\n" +
//   "Jacmel   \tHaiti\tJAK\n" +
//   "Jacobabad\tPakistan\tJAG\n" +
//   "Jacobina   \tBrazil\tJCM\n" +
//   "Jacquinot Bay\tPapua New Guinea\tJAQ\n" +
//   "Jaffna - Kankesanturai\tSri Lanka\tJAF\n" +
//   "Jagdalpur\tIndia\tJGB\n" +
//   "Jaipur - Sanganeer\tIndia\tJAI\n" +
//   "Jaisalmer   \tIndia\tJSA\n" +
//   "Jakarta - Halim Perdana Kusuma\tIndonesia\tHLP\n" +
//   "Jakarta - Metropolitan Area\tIndonesia\tJKT\n" +
//   "Jakarta - Soekarno-Hatta International\tIndonesia\tCGK\n" +
//   "Jalalabad    \tAfghanistan\tJAA\n" +
//   "Jalandhar\tIndia\tJLR\n" +
//   "Jalapa\tMexico\tJAL\n" +
//   "Jales\tBrazil\tJLS\n" +
//   "Jaluit Island  \tMarshall Islands\tUIT\n" +
//   "Jamba\tAngola\tJMB\n" +
//   "Jambi - Sultan Taha Syarifudn\tIndonesia \tDJB\n" +
//   "Jambol\tBulgaria\tJAM\n" +
//   "Jamestown (ND)\tUSA\tJMS\n" +
//   "Jamestown (NY)\tUSA\tJHW\n" +
//   "Jammu - Satwari\tIndia\tIXJ\n" +
//   "Jamnagar - Govardhanpur\tIndia\tJGA\n" +
//   "Jamshedpur - Sonari Airport\tIndia\tIXW\n" +
//   "Janakpur\tNepal\tJKR\n" +
//   "Jandakot\tAustralia\tJAD\n" +
//   "Janesville (WI) - Rock County\tUSA\tJVL\n" +
//   "Januaria\tBrazil\tJNA\n" +
//   "Jaque   \tPanama\tJQE\n" +
//   "Jatai\tBrazil\tJTI\n" +
//   "Jauja\tPeru\tJAU\n" +
//   "Jayapura - Sentani\tIndonesia\tDJJ\n" +
//   "Jeddah - King Abdulaziz International\tSaudi Arabia\tJED\n" +
//   "Jefferson City (MO) - Jefferson Memorial\tUSA\tJEF\n" +
//   "Jeremie - Jeremie Airport\tHaiti\tJEE\n" +
//   "Jerez de la Frontera/Cadiz - La Parra\tSpain\tXRY\n" +
//   "Jersey\tChannel Islands\tJER\n" +
//   "Jerusalem - Atarot Airport (closed)\tIsrael\tJRS\n" +
//   "Jessore - Jessore Airport\tBangladesh\tJSR\n" +
//   "Jeypore - Jeypore Airport\tIndia\tPYB\n" +
//   "Ji'an\tJiangxi, China\tJGS\n" +
//   "Jiamusi - Jiamusi Airport\tPR China\tJMU\n" +
//   "Jiayuguan - Jiayuguan Airport\tPR China\tJGN\n" +
//   "Jijel\tAlgeria\tGJL\n" +
//   "Jijiga\tEthiopia\tJIJ\n" +
//   "Jilin\tPR China\tJIL\n" +
//   "Jimma\tEthiopia\tJIM\n" +
//   "Jinan\tShandong, PR China\tTNA\n" +
//   "Jingdezhen\tPR China\tJDZ\n" +
//   "Jinghong - Gasa Airport\tPR China\tJHG\n" +
//   "Jining\tPR China\tJNG\n" +
//   "Jinja\tUganda\tJIN\n" +
//   "Jinjiang\tPR China\tJJN\n" +
//   "Jinka - Baco/Jinka Airport\tEthiopia\tBCO\n" +
//   "Jinzhou - Jinzhou Airport\tPR China\tJNZ\n" +
//   "Jipijapa\tEcuador\tJIP\n" +
//   "Jiri\tNepal\tJIR\n" +
//   "Jiujiang - Jiujiang Lushan Airport\tPR China\tJIU\n" +
//   "Jiwani\tPakistan\tJIW\n" +
//   "Joacaba\tBrazil\tJCB\n" +
//   "Joao Pessoa - Castro Pinto Airport\tBrazil\tJPA\n" +
//   "Jodhpur\tIndia\tJDH\n" +
//   "Jönköping (Jonkoping) - Axamo Airport\tSweden\tJKG\n" +
//   "Joensuu\tFinland\tJOE\n" +
//   "Johannesburg - OR Tambo International Airport\tSouth Africa\tJNB\n" +
//   "Johnson City (NY) - Binghamton/Endicott/Johnson\tUSA\tBGM\n" +
//   "Johnston Island\tUSA\tJON\n" +
//   "Johnstown (PA)\tUSA\tJST\n" +
//   "Johor Bahru - Sultan Ismail International\tMalaysia\tJHB\n" +
//   "Joinville - Cubatao Airport\tBrazil\tJOI\n" +
//   "Jolo\tPhilippines\tJOL\n" +
//   "Jomsom\tNepal\tJMO\n" +
//   "Jonesboro (AR)  Jonesboro Airport\tUSA\tJBR\n" +
//   "Joplin (MO)\tUSA\tJLN\n" +
//   "Jorhat - Rowriah Airport\tIndia\tJRH\n" +
//   "Jos\tNigeria\tJOS\n" +
//   "Jose De San Martin\tArgentina\tJSM\n" +
//   "Jouf\tSaudi Arabia\tAJF\n" +
//   "Juanjui\tPeru\tJJI\n" +
//   "Juba\tSouth Sudan\tJUB\n" +
//   "Juist (island)\tGermany\tJUI\n" +
//   "Juiz De Fora - Francisco De Assis Airport\tBrazil\tJDF\n" +
//   "Jujuy - El Cadillal Airport\tArgentina\tJUJ\n" +
//   "Julia Creek\tAustralia\tJCK\n" +
//   "Juliaca\tPeru\tJUL\n" +
//   "Jumla\tNepal\tJUM\n" +
//   "Jundah\tAustralia\tJUN\n" +
//   "Juneau (AK) - Juneau International Airport\tUSA\tJNU\n" +
//   "Junin\tArgentina\tJNI\n" +
//   "Juticalpa\tHonduras\tJUT\n" +
//   "Jwaneng\tBotswana\tJWA\n" +
//   "Jyväskylä (Jyvaskyla)\tFinland\tJYV\n" +
//   " \n" +
//   "K\n" +
//   "Kabul - Khwaja Rawash Airport\tAfghanistan\tKBL\n" +
//   "Kagoshima\tJapan\tKOJ\n" +
//   "Kahramanmaras\tTurkey\tKCM\n" +
//   "Kahului (HI)\tUSA\tOGG\n" +
//   "Kajaani\tFinland\tKAJ\n" +
//   "Kalamata\tGreece\tKLX\n" +
//   "Kalamazoo/Battle Creek (MI)\tUSA\tAZO\n" +
//   "Kalgoorlie\tAustralia\tKGI\n" +
//   "Kaliningrad\tRussia\tKGD\n" +
//   "Kalispell (MT)\tUSA\tFCA\n" +
//   "Kalmar\tSweden\tKLR\n" +
//   "Kamloops, BC\tCanada\tYKA\n" +
//   "Kamuela (HI)\tUSA\tMUE\n" +
//   "Kano\tNigeria\tKAN\n" +
//   "Kanpur\tIndia\tKNU\n" +
//   "Kansas City (MO) - Kansas City International Airport\tUSA\tMCI\n" +
//   "Kaohsiung International\tTaiwan\tKHH\n" +
//   "Kapalua West (HI)\tUSA\tJHM\n" +
//   "Karachi - Jinnah International Airport\tPakistan\tKHI\n" +
//   "Karlsruhe-Baden - Soellingen\tGermany\tFKB\n" +
//   "Karlstad\tSweden\tKSD\n" +
//   "Karpathos\tGreece\tAOK\n" +
//   "Karratha\tAustralia\tKTA\n" +
//   "Kars\tTurkey\tKYS\n" +
//   "Karumba\tAustralia\tKRB\n" +
//   "Karup\tDenmark\tKRP\n" +
//   "Kaschechawan, PQ\tCanada\tZKE\n" +
//   "Kassala\tSudan\tKSL\n" +
//   "Katherine\tAustralia\tKTR\n" +
//   "Kathmandu - Tribhuvan International Airport\tNepal\tKTM\n" +
//   "Katima Mulilo/Mpacha\tNamibia\tMPA\n" +
//   "Kauhajoki\tFinland\tKHJ\n" +
//   "Kaunakakai (HI)\tUSA\tMKK\n" +
//   "Kavalla\tGreece\tKVA\n" +
//   "Kayseri\tTurkey\tASR\n" +
//   "Kazan - Kazan International Airport\tRussia\tKZN\n" +
//   "Keetmanshoop\tNamibia\tKMP\n" +
//   "Kelowna, BC\tCanada\tYLW\n" +
//   "Kemi/Tornio\tFinland\tKEM\n" +
//   "Kenai (AK)\tUSA\tENA\n" +
//   "Kent (Manston) Kent International\tUnited Kingdom\tMSE\n" +
//   "Kerry County\tIreland\tKIR\n" +
//   "Ketchikan (AK)\tUSA\tKTN\n" +
//   "Key West (FL)\tUSA\tEYW\n" +
//   "Khamis Mushayat\tSaudi Arabia\tAHB\n" +
//   "Kharga - New Valley\tEgypt\tUVL\n" +
//   "Kharkov\tUkraine\tHRK\n" +
//   "Khartoum - Khartoum International Airport\tSudan\tKRT\n" +
//   "Khuzdar\tPakistan\tKDD\n" +
//   "Kiel - Holtenau\tGermany\tKEL\n" +
//   "Kiev - Borispol\tUkraine\tKBP\n" +
//   "Kiev - Zhulhany\tUkraine\tIEV\n" +
//   "Kigali - Gregoire Kayibanda\tRwanda\tKGL\n" +
//   "Kilimadjaro\tTanzania\tJRO\n" +
//   "Killeem (TX)\tUSA\tILE\n" +
//   "Kimberley\tSouth Africa\tKIM\n" +
//   "King Island\tKing Island (Australia)\tKNS\n" +
//   "King Salomon (AK)\tUSA\tAKN\n" +
//   "Kingscote\tAustralia\tKGC\n" +
//   "Kingston - Norman Manley\tJamaica\tKIN\n" +
//   "Kingston (NC)\tUSA\tISO\n" +
//   "Kingstown - E. T. Joshua Airport\tSaint Vincent and the Grenadines\tSVD\n" +
//   "Kinshasa - N'Djili\tCongo (DRC)\tFIH\n" +
//   "Kiritimati (island) - Cassidy International Airport\tKiribati\tCXI\n" +
//   "Kirkenes\tNorway\tKKN\n" +
//   "Kirkuk\tIraq\tKIK\n" +
//   "Kirkwall (Orkney)\tUnited Kingdom\tKOI\n" +
//   "Kiruna\tSweden\tKRN\n" +
//   "Kisangani\tCongo (DRC)\tFKI\n" +
//   "Kittilä\tFinland\tKTT\n" +
//   "Kitwe\tZambia\tKIW\n" +
//   "Klagenfurt\tAustria\tKLU\n" +
//   "Klamath Fall (OR)\tUSA\tLMT\n" +
//   "Klawock (AK)\tUSA\tKLW\n" +
//   "Kleinsee\tSouth Africa\tKLZ\n" +
//   "Knock\tIreland\tNOC\n" +
//   "Knoxville (TN)\tUSA\tTYS\n" +
//   "Kobe\tJapan\tUKB\n" +
//   "Kochi\tJapan\tKCZ\n" +
//   "Köln, Köln/Bonn\tGermany\tCGN\n" +
//   "Kodiak (AK)\tUSA\tADQ\n" +
//   "Kohat\tPakistan\tOHT\n" +
//   "Kokkola/Pietarsaari\tFinland\tKOK\n" +
//   "Kolkata (Calcutta) - Netaji Subhas Chandra\tIndia\tCCU\n" +
//   "Komatsu\tJapan\tKMQ\n" +
//   "Kona (HI)\tUSA\tKOA\n" +
//   "Konya\tTurkey\tKYA\n" +
//   "Korhogo\tCote d'Ivoire\tHGO\n" +
//   "Kos\tGreece\tKGS\n" +
//   "Kota Kinabalu\tMalaysia\tBKI\n" +
//   "Kotzbue (AK)\tUSA\tOTZ\n" +
//   "Kowanyama\tAustralia\tKWM\n" +
//   "Krakow (Cracow) - John Paul II International Airport\tPoland\tKRK\n" +
//   "Kristiansand\tNorway\tKRS\n" +
//   "Kristianstad\tSweden\tKID\n" +
//   "Kristiansund\tNorway\tKSU\n" +
//   "Kuala Lumpur - International Airport\tMalaysia\tKUL\n" +
//   "Kuala Lumpur - Sultan Abdul Aziz Shah\tMalaysia\tSZB\n" +
//   "Kuantan\tMalaysia\tKUA\n" +
//   "Kuching\tMalaysia\tKCH\n" +
//   "Kumamoto\tJapan\tKMJ\n" +
//   "Kununurra\tAustralia\tKNX\n" +
//   "Kuopio\tFinland\tKUO\n" +
//   "Kushiro\tJapan\tKUH\n" +
//   "Kuujjuaq (FortChimo)\tCanada\tYVP\n" +
//   "Kuujjuarapik\tCanada\tYGW\n" +
//   "Kuusamo\tFinland\tKAO\n" +
//   "Kuwait - Kuwait International\tKuwait\tKWI\n" +
//   "Kyoto\tJapan\tUKY\n" +
//   "\n" +
//   "Amelia : Are you coming or going? Viktor Navorski : I don't know. Both.\n" +
//   "The Terminal (Movie with Tom Hanks)\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "L\n" +
//   "Labe\tGuinea\tLEK\n" +
//   "Labouchere Bay (AK)\tUSA\tWLB\n" +
//   "Labuan\tMalaysia\tLBU\n" +
//   "Lac Brochet, MB\tCanada\tXLB\n" +
//   "La Coruna\tSpain\tLCG\n" +
//   "La Crosse (WI)\tUSA\tLSE\n" +
//   "Lae - Lae Nadzab Airport\tPapua New Guinea\tLAE\n" +
//   "La Rochelle\tFrance\tLRH\n" +
//   "Lafayette (IN)\tUSA\tLAF\n" +
//   "Lafayette, La\tUSA\tLFT\n" +
//   "Lagos - Murtala Muhammed Airport\tNigeria\tLOS\n" +
//   "La Grande\tCanada\tYGL\n" +
//   "Lahore\tPakistan\tLHE\n" +
//   "Lake Charles (LA)\tUSA\tLCH\n" +
//   "Lake Havasu City (AZ)\tUSA\tHII\n" +
//   "Lake Tahoe (CA)\tUSA\tTVL\n" +
//   "Lakselv\tNorway\tLKL\n" +
//   "Lambarene\tGabon\tLBQ\n" +
//   "Lamezia Terme\tItaly\tSUF\n" +
//   "Lampedusa\tItaly\tLMP\n" +
//   "Lanai City (HI)\tUSA\tLNY\n" +
//   "Lancaster (PA)\tUSA\tLNS\n" +
//   "Land's End\tUnited Kingdom\tLEQ\n" +
//   "Langkawi (islands)\tMalaysia\tLGK\n" +
//   "Lannion\tFrance\tLAI\n" +
//   "Lanseria\tSouth Africa\tHLA\n" +
//   "Lansing (MI)\tUSA\tLAN\n" +
//   "La Paz - El Alto\tBolivia\tLPB\n" +
//   "La Paz - Leon\tMexico\tLAP\n" +
//   "Lappeenranta\tFinland\tLPP\n" +
//   "Laramie (WY)\tUSA\tLAR\n" +
//   "Laredo (TX)\tUSA\tLRD\n" +
//   "Larnaca\tCyprus\tLCA\n" +
//   "Las Palmas\tSpain\tLPA\n" +
//   "Las Vegas (NV)\tUSA\tLAS\n" +
//   "Latrobe (PA)\tUSA\tLBE\n" +
//   "Launceston\tAustralia\tLST\n" +
//   "Laurel/Hattisburg (MS)\tUSA\tPIB\n" +
//   "Laverton\tAustralia\tLVO\n" +
//   "Lawton (OK)\tUSA\tLAW\n" +
//   "Lazaro Cardenas\tMexico\tLZC\n" +
//   "Leaf Rapids\tCanada\tYLR\n" +
//   "Learmouth (Exmouth)\tAustralia\tLEA\n" +
//   "Lebanon (NH)\tUSA\tLEB\n" +
//   "Leeds/Bradford\tUnited Kingdom\tLBA\n" +
//   "Leinster\tAustralia\tLER\n" +
//   "Leipzig\tGermany\tLEJ\n" +
//   "Lelystad\tNetherlands\tLEY\n" +
//   "Leon\tMexico\tBJX\n" +
//   "Leonora\tAustralia\tLNO\n" +
//   "Lerwick/Tingwall (Shetland Islands)\tUnited Kingdom\tLWK\n" +
//   "Lewiston (ID)\tUSA\tLWS\n" +
//   "Lewistown (MT)\tUSA\tLWT\n" +
//   "Lexington (KY)\tUSA\tLEX\n" +
//   "Libreville\tGabon\tLBV\n" +
//   "Lidkoeping\tSweden\tLDK\n" +
//   "Liege\tBelgium\tLGG\n" +
//   "Lifou\tLoyaute, Pazifik\tLIF\n" +
//   "Lihue (HI)\tUSA\tLIH\n" +
//   "Lille - Lille Airport\tFrance\tLIL\n" +
//   "Lilongwe - Lilongwe International\tMalawi\tLLW\n" +
//   "Lima - J Chavez International\tPeru\tLIM\n" +
//   "Limassol\tCyprus\tQLI\n" +
//   "Limoges\tFrance\tLIG\n" +
//   "Lincoln (NE)\tUSA\tLNK\n" +
//   "Lindeman Island\tAustralia\tLDC\n" +
//   "Linz - Hoersching\tAustria\tLNZ\n" +
//   "Lisala\tCongo (DRC)\tLIQ\n" +
//   "Lisbon - Lisboa\tPortugal\tLIS\n" +
//   "Lismore\tAustralia\tLSY\n" +
//   "Little Rock (AR)\tUSA\tLIT\n" +
//   "Liverpool\tUnited Kingdom\tLPL\n" +
//   "Lizard Island\tAustralia\tLZR\n" +
//   "Ljubljana - Brnik\tSlovenia\tLJU\n" +
//   "Lockhart River\tAustralia\tIRG\n" +
//   "Lome\tTogo\tLFW\n" +
//   "London\tCanada\tYXU\n" +
//   "London Metropolitan Area\tUnited Kingdom\tLON\n" +
//   "London - City Airport\tUnited Kingdom\tLCY\n" +
//   "London - Gatwick\tUnited Kingdom\tLGW\n" +
//   "London - Heathrow\tUnited Kingdom\tLHR\n" +
//   "London - Luton\tUnited Kingdom\tLTN\n" +
//   "London - Stansted\tUnited Kingdom\tSTN\n" +
//   "Londonderry - Eglinton\tUnited Kingdom\tLDY\n" +
//   "Long Beach (CA)\tUSA\tLGB\n" +
//   "Long Island (AK)\tUSA\tLIJ\n" +
//   "Long Island, Islip (NY) - Mac Arthur\tUSA\tISP\n" +
//   "Longreach\tAustralia\tLRE\n" +
//   "Longview/Kilgore (TX)\tUSA\tGGG\n" +
//   "Longyearbyen - Svalbard\tSvalbard/Norway\tLYR\n" +
//   "Loreto\tMexico\tLTO\n" +
//   "Lorient\tFrance\tLRT\n" +
//   "Los Angeles (CA) - International\tUSA\tLAX\n" +
//   "Los Cabos\tMexico\tSJD\n" +
//   "Los Mochis\tMexico\tLMM\n" +
//   "Los Rodeos\tTeneriffa/Spain\tTFN\n" +
//   "Losinj - Losinj Arpt\tCroatia (Hrvatska)\tLSZ\n" +
//   "Lourdes/Tarbes\tFrance\tLDE\n" +
//   "Louisville (KY)\tUSA\tSDF\n" +
//   "Luanda - 4 de Fevereiro\tAngola\tLAD\n" +
//   "Lubbock (TX)\tUSA\tLBB\n" +
//   "Lucknow\tIndia\tLKO\n" +
//   "Luederitz\tNamibia\tLUD\n" +
//   "Luga\tMalta\tMLA\n" +
//   "Lugano\tSwitzerland\tLUG\n" +
//   "Lulea\tSweden\tLLA\n" +
//   "Lumbumbashi\tCongo (DRC)\tFBM\n" +
//   "Lusaka - Lusaka International Airport\tZambia\tLUN\n" +
//   "Lusisiki\tSouth Africa\tLUJ\n" +
//   "Luxembourg\tLuxembourg\tLUX\n" +
//   "Luxi - Mangshi\tYunnan, PR China\tLUM\n" +
//   "Luxor\tEgypt\tLXR\n" +
//   "Lvov (Lwow, Lemberg)\tUkraine\tLWO\n" +
//   "Lydd - Lydd International Airport\tUnited Kingdom\tLYX\n" +
//   "Lynchburg (VA)\tUSA\tLYH\n" +
//   "Lyon - Lyon-Saint Exupéry Airport official website\tFrance\tLYS\n" +
//   "Lyons (KS) - Rice County Municipal\tUSA\tLYO\n" +
//   "M\n" +
//   "Maastricht/Aachen\tNetherlands\tMST\n" +
//   "Macapa - Alberto Alcolumbre International Airport\tBrazil\tMCP\n" +
//   "Macau - Macau International Airport\tMacau, China SAR\tMFM\n" +
//   "Maceio - Zumbi dos Palmares International Airport\tBrazil\tMCZ\n" +
//   "Mackay\tAustralia\tMKY\n" +
//   "Macon (GA)\tUSA\tMCN\n" +
//   "Mactan Island - Nab\tPhilippines\tNOP\n" +
//   "Madinah (Medina) - Mohammad Bin Abdulaziz\tSaudi Arabia\tMED\n" +
//   "Madison (WI) - Dane County Regional Airport\tUSA\tMSN\n" +
//   "Madras (Chennai) - Chennai International Airport\tIndia\tMAA\n" +
//   "Madrid - Barajas Airport\tSpain\tMAD\n" +
//   "Mahe - Seychelles International\tSeychelles\tSEZ\n" +
//   "Mahon\tSpain\tMAH\n" +
//   "Maitland\tAustralia\tMTL\n" +
//   "Majunga\tMadagascar\tMJN\n" +
//   "Makung\tTaiwan\tMZG\n" +
//   "Malabo - Malabo International Airport\tEquatorial Guinea\tSSG\n" +
//   "Malaga\tSpain\tAGP\n" +
//   "Malatya\tTurkey\tMLX\n" +
//   "Male - Velana International Airport\tMaledives\tMLE\n" +
//   "Malindi\tKenya\tMYD\n" +
//   "Malmo (Malmoe)\tSweden\tMMA\n" +
//   "Malmo (Malmö) - Malmö Airport\tSweden\tMMX\n" +
//   "Man\tCote d'Ivoire\tMJC\n" +
//   "Managua - Augusto C Sandino\tNicaragua\tMGA\n" +
//   "Manaus - Eduardo Gomes International Airport\tBrazil\tMAO\n" +
//   "Manchester\tUnited Kingdom\tMAN\n" +
//   "Manchester (NH)\tUSA\tMHT\n" +
//   "Mandalay - Mandalay-Annisaton Airport\tMyanmar\tMDL\n" +
//   "Manguna\tPapua New Guinea\tMFO\n" +
//   "Manihi\tFrench Polynesia\tXMH\n" +
//   "Manila - Ninoy Aquino International\tPhilippines\tMNL\n" +
//   "Manzanillo\tMexico\tZLO\n" +
//   "Manzini - Matsapha International\tSwaziland\tMTS\n" +
//   "Maputo - Maputo International\tMozambique\tMPM\n" +
//   "Mar del Plata\tArgentina\tMDQ\n" +
//   "Maracaibo - La Chinita International\tVenezuela\tMAR\n" +
//   "Maradi\tNiger\tMFQ\n" +
//   "Maras\tTurkey\tKCM\n" +
//   "Marathon (FL)\tUSA\tMTH\n" +
//   "Mardin\tTurkey\tMQM\n" +
//   "Mare\tNew Caledonia\tMEE\n" +
//   "Margate\tSouth Africa\tMGH\n" +
//   "Margerita\tVenezuela\tPMV\n" +
//   "Maribor\tSlovenia\tMBX\n" +
//   "Mariehamn (Maarianhamina)\tFinland\tMHQ\n" +
//   "Maroua\tCameroon\tMVR\n" +
//   "Marquette (MI)\tUSA\tMQT\n" +
//   "Marrakesh - Menara Airport\tMorocco\tRAK\n" +
//   "Marsa Alam\tEgypt\tRMF\n" +
//   "Marsa Matrah (Marsa Matruh)\tEgypt\tMUH\n" +
//   "Marseille - Marseille Provence Airport\tFrance\tMRS\n" +
//   "Marsh Harbour\tBahamas\tMHH\n" +
//   "Martha's Vineyard (MA)\tUSA\tMVY\n" +
//   "Martinsburg (WV)\tUSA\tMRB\n" +
//   "Maryborough\tAustralia\tMBH\n" +
//   "Maseru - Moshoeshoe International\tLesotho\tMSU\n" +
//   "Mason City IA\tUSA\tMCW\n" +
//   "Masvingo\tZimbabwe\tMVZ\n" +
//   "Matsumoto, Nagano\tJapan\tMMJ\n" +
//   "Matsuyama\tJapan\tMYJ\n" +
//   "Mattoon (IL)\tUSA\tMTO\n" +
//   "Maun\tBotswana\tMUB\n" +
//   "Maupiti\tFrench Polynesia\tMAU\n" +
//   "Mauritius - S.Seewoosagur Ram International\tMauritius\tMRU\n" +
//   "Mayaguez\tPuerto Rico\tMAZ\n" +
//   "Mazatlan\tMexico\tMZT\n" +
//   "McAllen (TX)\tUSA\tMFE\n" +
//   "Medan - Polania Int'l (now Soewondo AFB)\tIndonesia\tMES\n" +
//   "Medan - Kualanamu International\tIndonesia\tKNO\n" +
//   "Medellin - José María Córdova International\tColombia\tMDE\n" +
//   "Medford (OR)\tUSA\tMFR\n" +
//   "Medina\tSaudi Arabia\tMED\n" +
//   "Meekatharra\tAustralia\tMKR\n" +
//   "Melbourne - Melbourne Airport (Tullamarine)\tAustralia\tMEL\n" +
//   "Melbourne (FL)\tUSA\tMLB\n" +
//   "Melville Hall\tDominica\tDOM\n" +
//   "Memphis (TN)\tUSA\tMEM\n" +
//   "Mendoza\tArgentina\tMDZ\n" +
//   "Manado\tIndonesia\tMDC\n" +
//   "Merced (CA)\tUSA\tMCE\n" +
//   "Merida\tMexico\tMID\n" +
//   "Meridian (MS)\tUSA\tMEI\n" +
//   "Merimbula\tAustralia\tMIM\n" +
//   "Messina\tSouth Africa\tMEZ\n" +
//   "Metlakatla (AK)\tUSA\tMTM\n" +
//   "Metz -  Frescaty\tFrance\tMZM\n" +
//   "Metz/Nancy Metz-Nancy-Lorraine\tFrance\tETZ\n" +
//   "Mexicali\tMexico\tMXL\n" +
//   "Mexico City - Mexico City International Airport\tMexico\tMEX\n" +
//   "Mexico City - Atizapan\tMexico\tAZP\n" +
//   "Mexico City - Juarez International\tMexico\tMEX\n" +
//   "Mexico City - Santa Lucia\tMexico\tNLU\n" +
//   "Mfuwe\tZambia\tMFU\n" +
//   "Miami (FL)\tUSA\tMIA\n" +
//   "Mianwali\tPakistan\tMWD\n" +
//   "Middlemount\tAustralia\tMMM\n" +
//   "Midland/Odessa (TX)\tUSA\tMAF\n" +
//   "Midway Island - Sand Island Field\tUS Minor Outlying Islands\tMDY\n" +
//   "Mikkeli\tFinland\tMIK\n" +
//   "Milan\tItaly\tMIL\n" +
//   "Milan - Linate\tItaly\tLIN\n" +
//   "Milan - Malpensa\tItaly\tMXP\n" +
//   "Milan - Orio Al Serio\tItaly\tBGY\n" +
//   "Mildura\tAustralia\tMQL\n" +
//   "Miles City (MT)\tUSA\tMLS\n" +
//   "Milford Sound\tNew Zealand\tMFN\n" +
//   "Milwaukee (WI)\tUSA\tMKE\n" +
//   "Minatitlan\tMexico\tMTT\n" +
//   "Mineralnye Vody\tRussia\tMRV\n" +
//   "Minneapolis - St. Paul International Airport (MN)\tUSA\tMSP\n" +
//   "Minot (ND)\tUSA\tMOT\n" +
//   "Minsk, International\tBelarus\tMSQ\n" +
//   "Miri\tMalaysia\tMYY\n" +
//   "Mirpur\tPakistan\tQML\n" +
//   "Missula (MT)\tUSA\tMSO\n" +
//   "Mitchell (SD)\tUSA\tMHE\n" +
//   "Miyako Jima (Ryuku Islands) - Hirara\tJapan\tMMY\n" +
//   "Miyazaki\tJapan\tKMI\n" +
//   "Mkambati\tSouth Africa\tMBM\n" +
//   "Moanda\tGabon\tMFF\n" +
//   "Mobile (AL) - Pascagoula (MS)\tUSA\tMOB\n" +
//   "Modesto (CA)\tUSA\tMOD\n" +
//   "Moenjodaro\tPakistan\tMJD\n" +
//   "Mogadishu\tSomalia\tMGQ\n" +
//   "Mokuti\tNamibia\tOKU\n" +
//   "Moline/Quad Cities (IL)\tUSA\tMLI\n" +
//   "Mombasa - Moi International\tKenya\tMBA\n" +
//   "Monastir\tTunisia\tMIR\n" +
//   "Moncton\tCanada\tYQM\n" +
//   "Monroe (LA)\tUSA\tMLU\n" +
//   "Monrovia - Metropolitan Area\tLiberia\tMLW\n" +
//   "Monrovia - Roberts International\tLiberia\tROB\n" +
//   "Montego Bay - Sangster International\tJamaica\tMBJ\n" +
//   "Montenegro\tBrazil\tQGF\n" +
//   "Monterey (CA)\tUSA\tMRY\n" +
//   "Monterrey - Gen. Mariano Escobedo\tMexico\tMTY\n" +
//   "Monterrey - Aeropuerto Del Norte\tMexico\tNTR\n" +
//   "Montevideo - Carrasco International Airport\tUruguay\tMVD\n" +
//   "Montgomery (AL) - Montgomery Regional Airport\tUSA\tMGM\n" +
//   "Montpellier - Montpellier–Méditerranée Airport\tFrance\tMPL\n" +
//   "Montreal\tCanada\tYMQ\n" +
//   "Montreal - Dorval (Montréal-Trudeau)\tCanada\tYUL\n" +
//   "Montreal - Mirabel\tCanada\tYMX\n" +
//   "Montrose/Tellruide (CO)\tUSA\tMTJ\n" +
//   "Moorea\tFrench Polynesia\tMOZ\n" +
//   "Moranbah\tAustralia\tMOV\n" +
//   "Moree\tAustralia\tMRZ\n" +
//   "Morelia\tMexico\tMLM\n" +
//   "Morgantown (WV)\tUSA\tMGW\n" +
//   "Morioka, Hanamaki\tJapan\tHNA\n" +
//   "Moroni - Prince Said Ibrahim\tComoros (Comores)\tHAH\n" +
//   "Moruya\tAustralia\tMYA\n" +
//   "Moscow - Metropolitan Area\tRussia\tMOW\n" +
//   "Moscow - Domodedovo\tRussia\tDME\n" +
//   "Moscow - Sheremetyevo\tRussia\tSVO\n" +
//   "Moscow - Vnukovo\tRussia\tVKO\n" +
//   "Moses Lake (WA)\tUSA\tMWH\n" +
//   "Mossel Bay\tSouth Africa\tMZY\n" +
//   "Mostar\tBosnia and Herzegovina\tOMO\n" +
//   "Mosul\tIraq\tOSM\n" +
//   "Mouila\tGabon\tMJL\n" +
//   "Moundou\tChad\tMQQ\n" +
//   "Mount Cook\tNew Zealand\tGTN\n" +
//   "Mount Gambier\tAustralia\tMGB\n" +
//   "Mount Magnet\tAustralia\tMMG\n" +
//   "Mt. Isa\tAustralia\tISA\n" +
//   "Mt. McKinley (AK)\tUSA\tMCL\n" +
//   "Muenchen (Munich) - Franz Josef Strauss\tGermany\tMUC\n" +
//   "Muenster/Osnabrueck\tGermany\tFMO\n" +
//   "Mulhouse\tFrance\tMLH\n" +
//   "Multan\tPakistan\tMUX\n" +
//   "Murcia\tSpain\tMJV\n" +
//   "Murmansk\tRussia\tMMK\n" +
//   "Mus\tTurkey\tMSR\n" +
//   "Muscat - Seeb\tOman\tMCT\n" +
//   "Muscle Shoals (AL)\tUSA\tMSL\n" +
//   "Muskegon (MI)\tUSA\tMKG\n" +
//   "Muzaffarabad\tPakistan\tMFG\n" +
//   "Mvengue\tGabon\tMVB\n" +
//   "Mykonos\tGreece\tJMK\n" +
//   "Myrtle Beach (SC) - Myrtle Beach AFB\tUSA\tMYR\n" +
//   "Myrtle Beach (SC) - Grand Strand Airport\tUSA\tCRE\n" +
//   "Mysore\tIndia\tMYQ\n" +
//   "Mytilene (Lesbos)\tGreece\tMJT\n" +
//   "Mzamba\tSouth Africa\tMZF\n" +
//   "\n" +
//   "I heard an airplane passing overhead. I wished I was on it.\n" +
//   "Charles Bukowski\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "N\n" +
//   "Nadi\tFiji\tNAN\n" +
//   "Nagasaki\tJapan\tNGS\n" +
//   "Nagoya - Komaki AFB\tJapan\tNGO\n" +
//   "Nagpur\tIndia\tNAG\n" +
//   "Nairobi\tKenya\tNBO\n" +
//   "Nakhichevan\tAzerbaijan\tNAJ\n" +
//   "Nakhon Si Thammarat\tThailand\tNST\n" +
//   "Nancy\tFrance\tENC\n" +
//   "Nanisivik\tCanada\tYSR\n" +
//   "Nanning\tGuangxi, PR China\tNNG\n" +
//   "Nantes - Nantes Atlantique Airport\tFrance\tNTE\n" +
//   "Nantucket (MA)\tUSA\tACK\n" +
//   "Naples - Naples Capodichino Airport\tItaly\tNAP\n" +
//   "Naples (FL)\tUSA\tAPF\n" +
//   "Narrabri\tAustralia\tNAA\n" +
//   "Narrandera\tAustralia\tNRA\n" +
//   "Narsarsuaq\tGreenland\tUAK\n" +
//   "Nashville (TN)\tUSA\tBNA\n" +
//   "Nassau\tBahamas\tNAS\n" +
//   "Natal - Augusto Severo International Airport\tBrazil\tNAT\n" +
//   "Nausori\tFiji/Suva\tSUV\n" +
//   "Nawab Shah\tPakistan\tWNS\n" +
//   "Naxos - Naxos Airport\tGreece\tJNX\n" +
//   "N'Djamena\tChad\tNDJ\n" +
//   "N'Dola\tZambia\tNLA\n" +
//   "Nelson\tNew Zealand\tNSN\n" +
//   "Nelspruit\tSouth Africa\tNLP\n" +
//   "Nelspruit - Kruger Mpumalanga International Airport\tSouth Africa\tMQP\n" +
//   "Nevis\tSt. Kitts and Nevis\tNEV\n" +
//   "New Bern (NC)\tUSA\tEWN\n" +
//   "New Haven (CT)\tUSA\tHVN\n" +
//   "New Orleans, La\tUSA\tMSY\n" +
//   "Newquay\tUnited Kingdom\tNQY\n" +
//   "New Valley - Kharga\tEgypt\tUVL\n" +
//   "New York - John F. Kennedy (NY)\tUSA\tJFK\n" +
//   "New York - LaGuardia (NY)\tUSA\tLGA\n" +
//   "New York - Newark (NJ)\tUSA\tEWR\n" +
//   "New York (NY)\tUSA\tNYC\n" +
//   "Newburgh (NY)\tUSA\tSWF\n" +
//   "Newcastle - Belmont\tAustralia\tBEO\n" +
//   "Newcastle - Williamtown\tAustralia\tNTL\n" +
//   "Newcastle\tUnited Kingdom\tNCL\n" +
//   "Newcastle\tSouth Africa\tNCS\n" +
//   "Newman\tAustralia\tZNE\n" +
//   "Newport News/Williamsburg (VA)\tUSA\tPHF\n" +
//   "N'Gaoundere\tCameroon\tNGE\n" +
//   "Niagara Falls International\tUSA\tIAG\n" +
//   "Niamey\tNiger\tNIM\n" +
//   "Nice - Cote D'Azur Airport\tFrance\tNCE\n" +
//   "Nicosia\tCyprus\tNIC\n" +
//   "Nikolaev\tUkraine\tNLV\n" +
//   "Niigata\tJapan\tKIJ\n" +
//   "Nimes\tFrance\tFNI\n" +
//   "Nis\tSerbia\tINI\n" +
//   "Nizhny Novgorod - Strigino International Airport\tRussia\tGOJ\n" +
//   "Nome (AK)\tUSA\tOME\n" +
//   "Noosa\tAustralia\tNSA\n" +
//   "Norfolk Island\tAustralia\tNLK\n" +
//   "Norfolk/Virginia Beach (VA)\tUSA\tORF\n" +
//   "Norman Wells\tCanada\tYVQ\n" +
//   "Norrkoeping\tSweden\tNRK\n" +
//   "North Bend (OR)\tUSA\tOTH\n" +
//   "North Eleuthera\tBahamas\tELH\n" +
//   "Norwich\tUnited Kingdom\tNWI\n" +
//   "Nottingham - East Midlands\tUnited Kingdom\tEMA\n" +
//   "Nouadhibou\tMauritania\tNDB\n" +
//   "Nouakchott\tMauritania\tNKC\n" +
//   "Noumea\tNew Caledonia\tNOU\n" +
//   "Novi Sad\tSerbia\tQND\n" +
//   "Novosibirsk - Tolmachevo Airport\tRussia\tOVB\n" +
//   "Nürnberg (Nuremberg)\tGermany\tNUE\n" +
//   "Nuevo Laredo\tMexico\tNLD\n" +
//   "Nuku'alofa - Fua'Amotu International\tTonga\tTBU\n" +
//   " \n" +
//   "O\n" +
//   "Oakland (CA)\tUSA\tOAK\n" +
//   "Oaxaca - Xoxocotlan\tMexico\tOAX\n" +
//   "Odense\tDenmark\tODE\n" +
//   "Odessa\tUkraine\tODS\n" +
//   "Oerebro\tSweden\tORB\n" +
//   "Ohrid\tMacedonia\tOHD\n" +
//   "Oita\tJapan\tOIT\n" +
//   "Okayama\tJapan\tOKJ\n" +
//   "Okinawa, Ryukyo Island - Naha\tJapan\tOKA\n" +
//   "Oklahoma City (OK) - Will Rogers World\tUSA\tOKC\n" +
//   "Olbia\tItaly\tOLB\n" +
//   "Olympic Dam\tAustralia\tOLP\n" +
//   "Omaha (NE)\tUSA\tOMA\n" +
//   "Ondangwa\tNamibia\tOND\n" +
//   "Ontario (CA)\tUSA\tONT\n" +
//   "Oran (Ouahran)\tAlgeria\tORN\n" +
//   "Orange\tAustralia\tOAG\n" +
//   "Orange County (Santa Ana) (CA)\tUSA\tSNA\n" +
//   "Oranjemund\tNamibia\tOMD\n" +
//   "Oranjestad - Reina Beatrix International\tAruba\tAUA\n" +
//   "Orkney - Kirkwall\tUnited Kingdom\tKOI\n" +
//   "Orlando Metropolitan Area (FL)\tUSA\tORL\n" +
//   "Orlando - International Airport (FL)\tUSA\tMCO\n" +
//   "Orpheus Island\tAustralia\tORS\n" +
//   "Osaka, Metropolitan Area\tJapan\tOSA\n" +
//   "Osaka - Itami\tJapan\tITM\n" +
//   "Osaka - Kansai International Airport\tJapan\tKIX\n" +
//   "Oshkosh (WI)\tUSA\tOSH\n" +
//   "Osijek\tCroatia (Hrvatska)\tOSI\n" +
//   "Oslo - Oslo Airport, Gardermoen\tNorway\tOSL\n" +
//   "Oslo - Fornebu\tNorway\tFBU\n" +
//   "Oslo - Sandefjord\tNorway\tTRF\n" +
//   "Ottawa - Hull\tCanada\tYOW\n" +
//   "Ouadda\tCentral African Republic\tODA\n" +
//   "Ouarzazate\tMorocco\tOZZ\n" +
//   "Oudtshoorn\tSouth Africa\tOUH\n" +
//   "Ouagadougou\tBurkina Faso\tOUA\n" +
//   "Oujda\tMorocco\tOUD\n" +
//   "Oulu\tFinland\tOUL\n" +
//   "Out Skerries (Shetland)\tUnited Kingdom\tOUK\n" +
//   "Oviedo\tSpain\tOVD\n" +
//   "Owensboro (KY)\tUSA\tOWB\n" +
//   "Oxnard (CA)\tUSA\tOXR\n" +
//   "Oyem\tGabon/Loyautte\tUVE\n" +
//   "\n" +
//   "A lie can travel half way around the world while the truth is putting on its shoes.\n" +
//   "Charles Spurgeon\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "P\n" +
//   "Paderborn/Lippstadt\tGermany\tPAD\n" +
//   "Paducah (KY)\tUSA\tPAH\n" +
//   "Page/Lake Powell (AZ)\tUSA\tPGA\n" +
//   "Pago Pago\tAmerican Samoa\tPPG\n" +
//   "Pakersburg (WV) /Marietta (OH)\tUSA\tPKB\n" +
//   "Palermo - Punta Raisi\tItaly\tPMO\n" +
//   "Palma de Mallorca\tSpain\tPMI\n" +
//   "Palmas\tBrazil\tPMW\n" +
//   "Palmdale/Lancaster (CA)\tUSA\tPMD\n" +
//   "Palmerston North\tNew Zealand\tPMR\n" +
//   "Palm Springs (CA)\tUSA\tPSP\n" +
//   "Panama City - Tocumen International\tPanama\tPTY\n" +
//   "Panama City (FL)\tUSA\tPFN\n" +
//   "Panjgur\tPakistan\tPJG\n" +
//   "Pantelleria\tItaly\tPNL\n" +
//   "Papeete - Faaa\tFrench Polynesia (Tahiti)\tPPT\n" +
//   "Paphos\tCyprus\tPFO\n" +
//   "Paraburdoo\tAustralia\tPBO\n" +
//   "Paramaribo - Zanderij International\tSuriname\tPBM\n" +
//   "Paris\tFrance\tPAR\n" +
//   "Paris - Charles de Gaulle\tFrance\tCDG\n" +
//   "Paris - Le Bourget\tFrance\tLBG\n" +
//   "Paris - Orly\tFrance\tORY\n" +
//   "Paro\tBhutan\tPBH\n" +
//   "Pasco (WA)\tUSA\tPSC\n" +
//   "Pasni\tPakistan\tPSI\n" +
//   "Patna\tIndia\tPAT\n" +
//   "Pattaya\tThailand\tPYX\n" +
//   "Pau\tFrance\tPUF\n" +
//   "Pellston (MI)\tUSA\tPLN\n" +
//   "Penang International\tMalaysia\tPEN\n" +
//   "Pendelton (OR)\tUSA\tPDT\n" +
//   "Pensacola (FL)\tUSA\tPNS\n" +
//   "Peoria/Bloomington (IL)\tUSA\tPIA\n" +
//   "Pereira\tColombia\tPEI\n" +
//   "Perpignan\tFrance\tPGF\n" +
//   "Perth International\tAustralia\tPER\n" +
//   "Perugia\tItaly\tPEG\n" +
//   "Pescara\tItaly\tPSR\n" +
//   "Peshawar\tPakistan\tPEW\n" +
//   "Petersburg (AK)\tUSA\tPSG\n" +
//   "Phalaborwa\tSouth Africa\tPHW\n" +
//   "Philadelphia (PA) - International\tUSA\tPHL\n" +
//   "Phnom Penh - Pochentong\tCambodia\tPNH\n" +
//   "Phoenix (AZ) - Sky Harbor International\tUSA\tPHX\n" +
//   "Phuket\tThailand\tHKT\n" +
//   "Pierre (SD)\tUSA\tPIR\n" +
//   "Pietermaritzburg\tSouth Africa\tPZB\n" +
//   "Pietersburg\tSouth Africa\tPTG\n" +
//   "Pilanesberg/Sun City\tSouth Africa\tNTY\n" +
//   "Pisa - Galileo Galilei\tItaly\tPSA\n" +
//   "Pittsburgh International Airport (PA)\tUSA\tPIT\n" +
//   "Plattsburgh (NY)\tUSA\tPLB\n" +
//   "Plettenberg Bay\tSouth Africa\tPBZ\n" +
//   "Pocatello (ID)\tUSA\tPIH\n" +
//   "Podgorica\tMontenegro\tTGD\n" +
//   "Pohnpei\tMicronesia\tPNI\n" +
//   "Pointe a Pitre\tGuadeloupe\tPTP\n" +
//   "Pointe Noire\tCongo (ROC)\tPNR\n" +
//   "Poitiers - Biard\tFrance\tPIS\n" +
//   "Ponce\tPuerto Rico\tPSE\n" +
//   "Ponta Delgada\tPortugal\tPDL\n" +
//   "Pori\tFinland\tPOR\n" +
//   "Port Angeles (WA)\tUSA\tCLM\n" +
//   "Port au Prince\tHaiti\tPAP\n" +
//   "Port Augusta\tAustralia\tPUG\n" +
//   "Port Elizabeth\tSouth Africa\tPLZ\n" +
//   "Port Gentil\tGabon\tPOG\n" +
//   "Port Harcourt\tNigeria\tPHC\n" +
//   "Port Hedland\tAustralia\tPHE\n" +
//   "Portland\tAustralia\tPTJ\n" +
//   "Portland (ME)\tUSA\tPWM\n" +
//   "Portland International (OR)\tUSA\tPDX\n" +
//   "Port Lincoln\tAustralia\tPLO\n" +
//   "Port Macquarie\tAustralia\tPQQ\n" +
//   "Port Menier, PQ\tCanada\tYPN\n" +
//   "Port Moresby - Jackson Field\tPapua New Guinea\tPOM\n" +
//   "Porto\tPortugal\tOPO\n" +
//   "Porto Alegre - Salgado Filho International Airport\tBrazil\tPOA\n" +
//   "Port of Spain - Piarco International\tTrinidad and Tobago\tPOS\n" +
//   "Port Said\tEgypt\tPSD\n" +
//   "Porto Santo\tPortugal\tPXO\n" +
//   "Porto Velho\tBrazil\tPVH\n" +
//   "Port Vila\tVanuatu\tVLI\n" +
//   "Poughkeepsie (NY)\tUSA\tPOU\n" +
//   "Poznan, Lawica\tPoland\tPOZ\n" +
//   "Prague - Václav Havel Airport (formerly Ruzyne)\tCzech Republic\tPRG\n" +
//   "Praia - Nelson Mandela International Airport\tCape Verde\tRAI\n" +
//   "Presque Island (ME)\tUSA\tPQI\n" +
//   "Pretoria - Wonderboom Apt.\tSouth Africa\tPRY\n" +
//   "Preveza/Lefkas\tGreece\tPVK\n" +
//   "Prince George\tCanada\tYXS\n" +
//   "Prince Rupert/Digby Island\tCanada\tYPR\n" +
//   "Pristina\tSerbia\tPRN\n" +
//   "Prosperpine\tAustralia\tPPP\n" +
//   "Providence (RI)\tUSA\tPVD\n" +
//   "Prudhoe Bay (AK)\tUSA\tSCC\n" +
//   "Puebla\tMexico\tPBC\n" +
//   "Pueblo (CO)\tUSA\tPUB\n" +
//   "Puerto Escondido\tMexico\tPXM\n" +
//   "Puerto Ordaz\tVenezuela\tPZO\n" +
//   "Puerto Plata\tDominican Republic\tPOP\n" +
//   "Puerto Vallarta\tMexico\tPVR\n" +
//   "Pukatawagan\tCanada\tXPK\n" +
//   "Pula\tCroatia (Hrvatska)\tPUY\n" +
//   "Pullman (WA)\tUSA\tPUW\n" +
//   "Pune\tIndia, Maharashtra\tPNQ\n" +
//   "Punta Arenas - Presidente Carlos Ibáñez del Campo\tChile\tPUQ\n" +
//   "Punta Cana - Punta Cana International\tDominican Republic\tPUJ\n" +
//   "Pu San (Busan) - Gimhae International Airport\tSouth Korea\tPUS\n" +
//   "Pyongyang - Sunan International Airport\tNorth Korea\tFNJ\n" +
//   " \n" +
//   "Q\n" +
//   "Quebec - Quebec International\tCanada\tYQB\n" +
//   "Queenstown\tAustralia\tUEE\n" +
//   "Queenstown\tNew Zealand\tZQN\n" +
//   "Quetta\tPakistan\tUET\n" +
//   "Qingdao\tShandong, PR China\tTAO\n" +
//   "Quimper\tFrance\tUIP\n" +
//   "Quincy (IL)\tUSA\tUIN\n" +
//   "Quito - Mariscal Sucre International Airport\tEcuador\tUIO\n" +
//   "\n" +
//   "Travel makes a wise man better, and a fool worse.\n" +
//   "Thomas Fuller\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "R\n" +
//   "Rabat - Rabat-Salé Airport\tMorocco\tRBA\n" +
//   "Rahim Yar Khan - Shaikh Zayed International Airport\tPakistan\tRYK\n" +
//   "Raiatea\tFrench Polynesia\tRFP\n" +
//   "Rainbow Lake, AB\tCanada\tYOP\n" +
//   "Rajkot\tIndia\tRAJ\n" +
//   "Raleigh/Durham (NC)\tUSA\tRDU\n" +
//   "Ranchi\tIndia\tIXR\n" +
//   "Rangiroa\tFrench Polynesia\tRGI\n" +
//   "Rangoon (Yangon) - Mingaladon\tMyanmar\tRGN\n" +
//   "Rapid City (SD)\tUSA\tRAP\n" +
//   "Rarotonga\tCook Island\tRAR\n" +
//   "Ras al Khaymah (Ras al Khaimah)\tUnited Arab Emirates\tRKT\n" +
//   "Rawala Kot\tPakistan\tRAZ\n" +
//   "Rawalpindi\tPakistan\tRWP\n" +
//   "Reading (PA)\tUSA\tRDG\n" +
//   "Recife - Guararapes-Gilberto Freyre International\tBrazil\tREC\n" +
//   "Redding (CA)\tUSA\tRDD\n" +
//   "Redmond (OR)\tUSA\tRDM\n" +
//   "Reggio Calabria\tItaly\tREG\n" +
//   "Regina\tCanada\tYQR\n" +
//   "Reina Sofia\tTeneriffa/Spain\tTFS\n" +
//   "Rennes\tFrance\tRNS\n" +
//   "Reno (NV)\tUSA\tRNO\n" +
//   "Resolute Bay\tCanada\tYRB\n" +
//   "Reus\tSpain\tREU\n" +
//   "Reykjavik - Metropolitan Area\tIceland\tREK\n" +
//   "Reykjavik - Keflavik International\tIceland\tKEF\n" +
//   "Rhinelander (WI)\tUSA\tRHI\n" +
//   "Rhodos\tGreece\tRHO\n" +
//   "Richards Bay\tSouth Africa\tRCB\n" +
//   "Richmond (VA)\tUSA\tRIC\n" +
//   "Riga\tLatvia\tRIX\n" +
//   "Rijeka\tCroatia (Hrvatska)\tRJK\n" +
//   "Rimini\tItaly\tRMI\n" +
//   "Rio Branco - Plácido de Castro International Airport\tBrazil\tRBR\n" +
//   "Rio de Janeiro - Galeao\tBrazil\tGIG\n" +
//   "Rio de Janeiro - Santos Dumont\tBrazil\tSDU\n" +
//   "Rio de Janeiro\tBrazil\tRIO\n" +
//   "Riyadh - King Khaled International\tSaudi Arabia\tRUH\n" +
//   "Roanne\tFrance\tRNE\n" +
//   "Roanoke (VA)\tUSA\tROA\n" +
//   "Roatan\tHonduras\tRTB\n" +
//   "Rochester (MN)\tUSA\tRST\n" +
//   "Rochester (NY)\tUSA\tROC\n" +
//   "Rock Sound\tBahamas\tRSD\n" +
//   "Rock Springs (WY)\tUSA\tRKS\n" +
//   "Rockford (IL)\tUSA\tRFD\n" +
//   "Rockhampton\tAustralia\tROK\n" +
//   "Rockland (ME)\tUSA\tRKD\n" +
//   "Rocky Mount - Wilson (NC)\tUSA\tRWI\n" +
//   "Rodez\tFrance\tRDZ\n" +
//   "Rodrigues Island\tMauritius\tRRG\n" +
//   "Roenne\tDenmark\tRNN\n" +
//   "Rome\tItaly\tROM\n" +
//   "Rome - Ciampino\tItaly\tCIA\n" +
//   "Rome - Fuimicino\tItaly\tFCO\n" +
//   "Ronneby\tSweden\tRNB\n" +
//   "Rosario\tArgentina\tROS\n" +
//   "Rostov-on-Don - Rostov-on-Don Airport\tRussia\tRVI\n" +
//   "Rostov-on-Don - Platov International Airport\tRussia\tROV\n" +
//   "Rotorua\tNew Zealand\tROT\n" +
//   "Rotterdam\tNetherlands\tRTM\n" +
//   "Rovaniemi\tFinland\tRVN\n" +
//   "Rundu\tNamibia\tNDU\n" +
//   "Ruse\tBulgaria\tROU\n" +
//   "\n" +
//   "“It can hardly be a coincidence that no language on Earth has ever produced the expression \"as pretty as an airport\".\n" +
//   "Douglas Adams\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "S\n" +
//   "Saarbruecken\tGermany\tSCN\n" +
//   "Sacramento (CA)\tUSA\tSMF\n" +
//   "Sado Shima\tJapan\tSDS\n" +
//   "Saginaw/Bay City/Midland (MI)\tUSA\tMBS\n" +
//   "Saidu Sharif\tPakistan\tSDT\n" +
//   "Saigon (Ho Chi Minh City) - Tan Son Nhat International\tViet Nam\tSGN\n" +
//   "Saint Brieuc\tFrance\tSBK\n" +
//   "Saint Denis - Roland Garros Airport\tReunion\tRUN\n" +
//   "Saint John\tCanada\tYSJ\n" +
//   "Saipan\tNorthern Mariana Islands\tSPN\n" +
//   "Sal\tCape Verde\tSID\n" +
//   "Salalah\tOman\tSLL\n" +
//   "Salem (OR)\tUSA\tSLE\n" +
//   "Salinas (CA)\tUSA\tSNS\n" +
//   "Salinas\tEcuador\tSNC\n" +
//   "Salisbury\tZimbabwe\tSAY\n" +
//   "Salisbury (MD)\tUSA\tSBY\n" +
//   "Saloniki\tGreece\tSKG\n" +
//   "Salta, Gen Belgrano\tArgentina\tSLA\n" +
//   "Salt Lake City (UT)\tUSA\tSLC\n" +
//   "Salvador - Salvador International Airport\tBrazil\tSSA\n" +
//   "Salzburg - W.A. Mozart\tAustria\tSZG\n" +
//   "Samara - Kurumoch International Airport\tRussia\tKUF\n" +
//   "Samarkand - Samarkand International Airport\tUzbekistan\tSKD\n" +
//   "Samos\tGreece\tSMI\n" +
//   "Samsun\tTurkey\tSZF\n" +
//   "San Andres\tColombia\tADZ\n" +
//   "San Angelo (TX)\tUSA\tSJT\n" +
//   "San Antonio (TX)\tUSA\tSAT\n" +
//   "San Carlos de Bariloche\tArgentina\tBRC\n" +
//   "San Diego - Lindberg Field International (CA)\tUSA\tSAN\n" +
//   "San Francisco - International Airport, SA\tUSA\tSFO\n" +
//   "San Jose Cabo\tMexico\tSJD\n" +
//   "San Jose\tCosta Rica\tSJO\n" +
//   "San Jose (CA)\tUSA\tSJC\n" +
//   "San Juan - Luis Munoz Marin International Airport\tPuerto Rico\tSJU\n" +
//   "San Luis Obisco (CA)\tUSA\tSBP\n" +
//   "San Luis Potosi\tMexico\tSLP\n" +
//   "San Pedro\tCote d'Ivoire\tSPY\n" +
//   "San Pedro Sula\tHonduras\tSAP\n" +
//   "San Salvador\tBahamas\tZSA\n" +
//   "San Salvador\tEl Salvador\tSAL\n" +
//   "San Sebastian\tSpain\tEAS\n" +
//   "Sanaa (Sana'a) - Sana'a International\tYemen\tSAH\n" +
//   "Sandspit\tCanada\tYZP\n" +
//   "Santa Ana - John Wayne Airport (CA)\tUSA\tSNA\n" +
//   "Santa Barbara (CA)\tUSA\tSBA\n" +
//   "Santa Cruz de la Palma\tSpain\tSPC\n" +
//   "Santa Cruz de la Sierra\tBolivia\tSRZ\n" +
//   "Santa Katarina - Mount Sinai\tEgypt\tSKV\n" +
//   "Santa Maria\tPortugal\tSMA\n" +
//   "Santa Maria (CA)\tUSA\tSMX\n" +
//   "Santander\tSpain\tSDR\n" +
//   "Santa Rosa (CA)\tUSA\tSTS\n" +
//   "Santa Rosa\tBolivia\tSRB\n" +
//   "Santa Rosa\tBrazil\tSRA\n" +
//   "Santa Rosa\tArgentina\tRSA\n" +
//   "Santa Rosa, Copan\tHonduras\tSDH\n" +
//   "Santa Rosalia\tColombia\tSSL\n" +
//   "Santa Rosalia\tMexico\tSRL\n" +
//   "Santiago - Antonio Maceo Airport\tCuba\tSCU\n" +
//   "Santiago de Chile - Arturo Merino Benitez\tChile\tSCL\n" +
//   "Santiago de Compostela\tSpain\tSCQ\n" +
//   "Santo\tVanuatu\tSON\n" +
//   "Santo Domingo\tDominican Republic\tSDQ\n" +
//   "Sao Luis - Marechal Cunha Machado International\tBrazil\tSLZ\n" +
//   "Sao Paulo\tBrazil\tSAO\n" +
//   "Sao Paulo - Congonhas\tBrazil\tCGH\n" +
//   "Sao Paulo - Guarulhos\tBrazil\tGRU\n" +
//   "Sao Paulo - Viracopos\tBrazil\tVCP\n" +
//   "Sao Tome\tSao Tome & Principe\tTMS\n" +
//   "Sapporo\tHokkaido, Japan\tSPK\n" +
//   "Sapporo - Okadama\tHokkaido, Japan\tOKD\n" +
//   "Sapporo - New Chitose Airport\tJapan\tCTS\n" +
//   "Sarajevo\tBosnia and Herzegovina\tSJJ\n" +
//   "Saransk - Saransk Airport\tRussia\tSKX\n" +
//   "Sarasota/Bradenton (FL)\tUSA\tSRQ\n" +
//   "Saskatoon\tCanada\tYXE\n" +
//   "Sassandra\tCote d'Ivoire\tZSS\n" +
//   "Savannah (GA)\tUSA\tSAV\n" +
//   "Savonlinna\tFinland\tSVL\n" +
//   "Scarborough - Crown Point International\tTrinidad and Tobago\tTAB\n" +
//   "Scone\tAustralia\tNSO\n" +
//   "Scottsdale (AZ)\tUSA\tSCF\n" +
//   "Seattle/Tacoma (WA)\tUSA\tSEA\n" +
//   "Sehba\tLibya\tSEB\n" +
//   "Seinaejoki\tFinland\tSJY\n" +
//   "Selibi Phikwe\tBotswana\tPKW\n" +
//   "Sendai\tJapan\tSDJ\n" +
//   "Seoul - Incheon International Airport\tSouth Korea\tICN\n" +
//   "Seoul - Kimpo\tSouth Korea\tSEL\n" +
//   "Sevilla\tSpain\tSVQ\n" +
//   "Sfax\tTunisia\tSFA\n" +
//   "Shamattawa, MB\tCanada\tZTM\n" +
//   "Shanghai - Hongqiao\tChina\tSHA\n" +
//   "Shanghai - Pu Dong\tChina\tPVG\n" +
//   "Shannon (Limerick)\tIreland\tSNN\n" +
//   "Sharjah\tUnited Arab Emirates\tSHJ\n" +
//   "Sharm El Sheikh\tEgypt\tSSH\n" +
//   "Sheffield, City Airport\tUnited Kingdom\tSZD\n" +
//   "Sheffield, Doncaster, Robin Hood International Airport\tUnited Kingdom\tDSA\n" +
//   "Shenandoah Valley/Stauton (VA)\tUSA\tSHD\n" +
//   "Shenyang\tLiaoning, PR China\tSHE\n" +
//   "Shenzhen - Shenzhen Bao'an International\tGuangdong, PR China\tSZX\n" +
//   "Sheridan (WY)\tUSA\tSHR\n" +
//   "Shreveport, La\tUSA\tSHV\n" +
//   "Shute Harbour\tAustralia\tJHQ\n" +
//   "Sibu\tMalaysia\tSBW\n" +
//   "Sidney (MT)\tUSA\tSDY\n" +
//   "Silistra\tBulgaria\tSLS\n" +
//   "Simferopol\tUkraine\tSIP\n" +
//   "Sindhri\tPakistan\tMPD\n" +
//   "Singapore - Changi\tSingapore\tSIN\n" +
//   "Singapore - Paya Lebar\tSingapore\tQPG\n" +
//   "Singapore - Seletar\tSingapore\tXSP\n" +
//   "Singleton\tAustralia\tSIX\n" +
//   "Sioux City IA\tUSA\tSUX\n" +
//   "Sioux Falls (SD)\tUSA\tFSD\n" +
//   "Sishen\tSouth Africa\tSIS\n" +
//   "Sitka (AK)\tUSA\tSIT\n" +
//   "Sivas\tTurkey\tVAS\n" +
//   "Siwa\tEgypt\tSEW\n" +
//   "Skagway (AK)\tUSA\tSGY\n" +
//   "Skardu\tPakistan\tKDU\n" +
//   "Skiathos\tGreece\tJSI\n" +
//   "Skopje\tMacedonia\tSKP\n" +
//   "Skrydstrup\tDenmark\tSKS\n" +
//   "Skukuza\tSouth Africa\tSZK\n" +
//   "Sligo\tIreland\tSXL\n" +
//   "Smithers\tCanada\tYYD\n" +
//   "Sodankylae\tFinland\tSOT\n" +
//   "Soenderborg\tDenmark\tSGD\n" +
//   "Soendre Stroemfjord\tGreenland\tSFJ\n" +
//   "Sofia - Vrazhdebna\tBulgaria\tSOF\n" +
//   "Sogndal\tNorway\tSOG\n" +
//   "Southampton - Eastleigh\tUnited Kingdom\tSOU\n" +
//   "South Bend (IN)\tUSA\tSBN\n" +
//   "South Indian Lake, MB\tCanada\tXSI\n" +
//   "South Molle Island\tAustralia\tSOI\n" +
//   "Southend (London)\tUnited Kingdom\tSEN\n" +
//   "Split\tCroatia (Hrvatska)\tSPU\n" +
//   "Spokane (WA)\tUSA\tGEG\n" +
//   "Springbok\tSouth Africa\tSBU\n" +
//   "Springfield (IL)\tUSA\tSPI\n" +
//   "Springfield (MO)\tUSA\tSGF\n" +
//   "Srinagar\tIndia\tSXR\n" +
//   "St. Augustin, PQ\tCanada\tYIF\n" +
//   "St. Croix\tVirgin Islands (U.S.)\tSTX\n" +
//   "St. Etienne\tFrance\tEBU\n" +
//   "St. George (UT)\tUSA\tSGU\n" +
//   "St. John's\tCanada\tYYT\n" +
//   "St. Kitts\tSt. Kitts and Nevis\tSKB\n" +
//   "St. Louis (MO) Lambert–St. Louis International Airport\tUSA\tSTL\n" +
//   "St. Lucia Hewanorra\tSaint Lucia\tUVF\n" +
//   "St. Lucia Vigle\tSaint Lucia\tSLU\n" +
//   "St. Marteen\tNetherlands Antilles\tSXM\n" +
//   "St. Martin\tSt. Martin (Guadeloupe)\tSFG\n" +
//   "St. Petersburg (Leningrad) - Pulkovo\tRussia\tLED\n" +
//   "St. Pierre, NF\tCanada\tFSP\n" +
//   "St. Thomas\tVirgin Islands (U.S.)\tSTT\n" +
//   "St. Vincent\tSaint Vincent and the Grenadines\tSVD\n" +
//   "Stansted (London)\tUnited Kingdom\tSTN\n" +
//   "State College/Belefonte (PA)\tUSA\tSCE\n" +
//   "Stavanger\tNorway\tSVG\n" +
//   "Steamboat Springs (CO)\tUSA\tHDN\n" +
//   "Stettin\tPoland\tSZZ\n" +
//   "Stockholm Metropolitan Area\tSweden\tSTO\n" +
//   "Stockholm - Arlanda\tSweden\tARN\n" +
//   "Stockholm - Bromma\tSweden\tBMA\n" +
//   "Stockton (CA)\tUSA\tSCK\n" +
//   "Stornway\tUnited Kingdom\tSYY\n" +
//   "Strasbourg - Strasbourg Airport\tFrance\tSXB\n" +
//   "Streaky Bay\tAustralia\tKBY\n" +
//   "Stuttgart - Echterdingen\tGermany\tSTR\n" +
//   "Sui\tPakistan\tSUL\n" +
//   "Sukkur\tPakistan\tSKZ\n" +
//   "Sumburgh (Shetland)\tUnited Kingdom\tLSI\n" +
//   "Sun Valley (ID)\tUSA\tSUN\n" +
//   "Sundsvall\tSweden\tSDL\n" +
//   "Sunshine Coast\tAustralia\tMCY\n" +
//   "Surabaya - Juanda\tIndonesia\tSUB\n" +
//   "Surat\tIndia\tSTV\n" +
//   "Suva - Nausori Airport (Luvuluvu)\tFiji\tSUV\n" +
//   "Swakopmund\tNamibia\tSWP\n" +
//   "Sydney - Sydney Airport\tAustralia\tSYD\n" +
//   "Sylhet\tBangladesh\tZYL\n" +
//   "Syracuse (NY)\tUSA\tSYR\n" +
//   " \n" +
//   "T\n" +
//   "Tabuk\tSaudi Arabia\tTUU\n" +
//   "Taif\tSaudi Arabia\tTIF\n" +
//   "Taipei - Chiang Kai Shek\tTaiwan\tTPE\n" +
//   "Taipei - Sung Shan\tTaiwan\tTAY\n" +
//   "Taiyuan\tShanxi, PR China\tTYN\n" +
//   "Takamatsu\tJapan\tTAK\n" +
//   "Talkeetna (AK)\tUSA\tTKA\n" +
//   "Tallahassee (FL)\tUSA\tTLH\n" +
//   "Tallinn - Pirita Harbour\tEstonia\tQUF\n" +
//   "Tallinn - Ulemiste\tEstonia\tTLL\n" +
//   "Tampa - International (FL)\tUSA\tTPA\n" +
//   "Tampere\tFinland\tTMP\n" +
//   "Tampico - Gen. F. Javier Mina\tMexico\tTAM\n" +
//   "Tamworth\tAustralia\tTMW\n" +
//   "Tangier - Boukhalef\tMorocco\tTNG\n" +
//   "Taree\tAustralia\tTRO\n" +
//   "Targovishte\tBulgaria\tTGV\n" +
//   "Tashkent - International\tUzbekistan\tTAS\n" +
//   "Tawau\tMalaysia\tTWU\n" +
//   "Tbilisi - Novo Alexeyevka\tGeorgia\tTBS\n" +
//   "Te Anau\tNew Zealand\tTEU\n" +
//   "Teesside, Durham Tees Valley\tUnited Kingdom\tMME\n" +
//   "Tegucigalpa\tHonduras\tTGU\n" +
//   "Tehran (Teheran) - Mehrabad\tIran\tTHR\n" +
//   "Tekirdag - Corlu\tTurkey\tTEQ\n" +
//   "Tel Aviv - Ben Gurion International\tIsrael\tTLV\n" +
//   "Telluride (CO)\tUSA\tTEX\n" +
//   "Temora\tAustralia\tTEM\n" +
//   "Tenerife\tSpain\tTCI\n" +
//   "Tenerife - Sur Reina Sofia\tSpain\tTFS\n" +
//   "Tenerife - Norte Los Rodeos\tSpain\tTFN\n" +
//   "Tennant Creek\tAustralia\tTCA\n" +
//   "Terceira\tPortugal\tTER\n" +
//   "Teresina\tBrazil\tTHE\n" +
//   "Termez (Termes)\tUzbekistan\tTMZ\n" +
//   "Terrace\tCanada\tYXT\n" +
//   "Terre Haute (IN)\tUSA\tHUF\n" +
//   "Texarkana (AR)\tUSA\tTXK\n" +
//   "Thaba'Nchu\tSouth Africa\tTCU\n" +
//   "The Pas\tCanada\tYQD\n" +
//   "Thessaloniki - Makedonia Apt.\tGreece\tSKG\n" +
//   "Thief River Falls (MN)\tUSA\tTVF\n" +
//   "Thira\tGreece\tJTR\n" +
//   "Thiruvananthapuram\tIndia\tTRV\n" +
//   "Thisted\tDenmark\tTED\n" +
//   "Thompson\tCanada\tYTH\n" +
//   "Thorne Bay (AK)\tUSA\tKTB\n" +
//   "Thunder Bay\tCanada\tYQT\n" +
//   "Thursday Island\tAustralia\tTIS\n" +
//   "Tianjin\tChina\tTSN\n" +
//   "Tijuana - Rodriguez\tMexico\tTIJ\n" +
//   "Tioman\tIndonesia\tTOD\n" +
//   "Tirana - Rinas\tAlbania\tTIA\n" +
//   "Tiruchirapally\tIndia\tTRZ\n" +
//   "Tivat\tMontenegro\tTIV\n" +
//   "Tobago\tTrinidad and Tobago\tTAB\n" +
//   "Tokushima\tJapan\tTKS\n" +
//   "Tokyo\tJapan\tTYO\n" +
//   "Tokyo - Haneda\tJapan\tHND\n" +
//   "Tokyo - Narita\tJapan\tNRT\n" +
//   "Toledo (OH)\tUSA\tTOL\n" +
//   "Tom Price\tAustralia\tTPR\n" +
//   "Toowoomba\tAustralia\tTWB\n" +
//   "Toronto - Billy Bishop Toronto City Airport\tCanada\tYTZ\n" +
//   "Toronto - Toronto Pearson International Airport\tCanada\tYYZ\n" +
//   "Toronto\tCanada\tYTO\n" +
//   "Tortola\tBritish Virgin Islands\tTOV\n" +
//   "Touho\tNew Caledonia\tTOU\n" +
//   "Toulouse - Blagnac Airport\tFrance\tTLS\n" +
//   "Townsville\tAustralia\tTSV\n" +
//   "Toyama\tJapan\tTOY\n" +
//   "Trabzon\tTurkey\tTZX\n" +
//   "Trapani\tItaly\tTPS\n" +
//   "Traverse City (MI)\tUSA\tTVC\n" +
//   "Treasure Cay\tBahamas\tTCB\n" +
//   "Trenton/Princeton (NJ)\tUSA\tTTN\n" +
//   "Treviso\tItaly\tTSF\n" +
//   "Tri-Cities Regional (TN) /VA\tUSA\tTRI\n" +
//   "Trieste\tItaly\tTRS\n" +
//   "Tripoli - Tripoli International\tLibya\tTIP\n" +
//   "Tromsoe\tNorway\tTOS\n" +
//   "Trondheim\tNorway\tTRD\n" +
//   "Tsumeb\tNamibia\tTSB\n" +
//   "Tucson (AZ)\tUSA\tTUS\n" +
//   "Tulepo (MS)\tUSA\tTUP\n" +
//   "Tulsa (OK)\tUSA\tTUL\n" +
//   "Tunis - Carthage\tTunisia\tTUN\n" +
//   "Turbat\tPakistan\tTUK\n" +
//   "Turin\tItaly\tTRN\n" +
//   "Turku\tFinland\tTKU\n" +
//   "Tuscaloosa (AL)\tUSA\tTCL\n" +
//   "Tuxtla Gutierrez\tMexico\tTGZ\n" +
//   "Twin Falls (ID)\tUSA\tTWF\n" +
//   "Tyler (TX)\tUSA\tTYR\n" +
//   " \n" +
//   "U\n" +
//   "Ua Huka\tFrench Polynesia\tUAH\n" +
//   "Ua Pou\tFrench Polynesia\tUAP\n" +
//   "Ube\tJapan\tUBJ\n" +
//   "Uberaba\tBrazil\tUBA\n" +
//   "Uberlandia - Eduardo Gomes Airport\tBrazil\tUDI\n" +
//   "Ubon Ratchathani - Muang Ubon Airport\tThailand\tUBP\n" +
//   "Udaipur - Dabok Airport\tIndia\tUDR\n" +
//   "Uden - Volkel Airport\tNetherlands\tUDE\n" +
//   "Udon Thani\tThailand\tUTH\n" +
//   "Ufa\tRussia\tUFA\n" +
//   "Uherske Hradiste\tCzech Republic\tUHE\n" +
//   "Uige\tAngola\tUGO\n" +
//   "Ujung Pandang - Hasanudin Airport\tIndonesia\tUPG\n" +
//   "Ukhta\tRussia\tUCT\n" +
//   "Ukiah (CA)\tUSA\tUKI\n" +
//   "Ulaanbaatar - Buyant Uhaa Airport\tMongolia\tULN\n" +
//   "Ulan-Ude\tRussia\tUUD\n" +
//   "Ulanhot\tPR China\tHLH\n" +
//   "Ulei\tVanuatu\tULB\n" +
//   "Ulsan\tSouth Korea\tUSN\n" +
//   "Ulundi\tSouth Africa\tULD\n" +
//   "Umea\tSweden\tUME\n" +
//   "Umiujaq\tCanada\tYUD\n" +
//   "Umtata\tSouth Africa\tUTT\n" +
//   "Unalakleet (AK)\tUSA\tUNK\n" +
//   "Union Island\tSaint Vincent and the Grenadines\tUNI\n" +
//   "Unst (Shetland Island) - Baltasound Airport\tUnited Kingdom\tUNT\n" +
//   "Upala\tCosta Rica\tUPL\n" +
//   "Upernavik - Upernavik Heliport\tGreenland\tJUV\n" +
//   "Upington\tSouth Africa\tUTN\n" +
//   "Upolu Point (HI)\tUSA\tUPP\n" +
//   "Uranium City\tCanada\tYBE\n" +
//   "Urgench\tUzbekistan\tUGC\n" +
//   "Uriman\tVenezuela\tURM\n" +
//   "Urmiehm (Orumieh)\tIran\tOMH\n" +
//   "Uruapan\tMexico\tUPN\n" +
//   "Urubupunga - Ernesto Pochler Airport\tBrazil\tURB\n" +
//   "Uruguaiana - Ruben Berta Airport\tBrazil\tURG\n" +
//   "Urumqi\tXinjiang, PR China\tURC\n" +
//   "Uruzgan\tAfghanistan\tURZ\n" +
//   "Ushuaia - Islas Malvinas Airport\tArgentina\tUSH\n" +
//   "Utapao (Pattaya)\tThailand\tUTP\n" +
//   "Utica (NY) - Oneida County Airport\tUSA\tUCA\n" +
//   "Utila\tHonduras\tUII\n" +
//   "Uummannaq\tGreenland\tUMD\n" +
//   "Uzhgorod\tUkraine\tUDJ\n" +
//   " \n" +
//   "V\n" +
//   "Vaasa\tFinland\tVAA\n" +
//   "Vaexjoe\tSweden\tVXO\n" +
//   "Vail (CO)\tUSA\tEGE\n" +
//   "Val d'Or\tCanada\tYVO\n" +
//   "Valdez (AK)\tUSA\tVDZ\n" +
//   "Valdosta (GA)\tUSA\tVLD\n" +
//   "Valencia\tSpain\tVLC\n" +
//   "Valencia\tVenezuela\tVLN\n" +
//   "Valladolid\tSpain\tVLL\n" +
//   "Valparaiso\tChile\tVAP\n" +
//   "Valverde\tSpain\tVDE\n" +
//   "Van - Ferit Melen\tTurkey\tVAN\n" +
//   "Vancouver - Vancouver International\tCanada\tYVR\n" +
//   "Varadero\tCuba\tVRA\n" +
//   "Varanasi\tIndia\tVNS\n" +
//   "Varkaus\tFinland\tVRK\n" +
//   "Varna\tBulgaria\tVAR\n" +
//   "Vasteras\tSweden\tVST\n" +
//   "Velikiye Luki (Welikije Luki)\tRussia\tVLU\n" +
//   "Venice - Marco Polo\tItaly\tVCE\n" +
//   "Veracruz\tMexico\tVER\n" +
//   "Vernal (UT)\tUSA\tVEL\n" +
//   "Vero Beach/Ft. Pierce (FL)\tUSA\tVRB\n" +
//   "Verona (Brescia) Montichiari\tItaly\tVBS\n" +
//   "Verona\tItaly\tVRN\n" +
//   "Victoria\tCanada\tYYJ\n" +
//   "Victoria Falls\tZimbabwe\tVFA\n" +
//   "Vidin\tBulgaria\tVID\n" +
//   "Vientiane - Wattay\tLao PDR\tVTE\n" +
//   "Vigo\tSpain\tVGO\n" +
//   "Villahermosa\tMexico\tVSA\n" +
//   "Vilnius\tLithuania\tVNO\n" +
//   "Virgin Gorda\tVirgin Islands (British)\tVIJ\n" +
//   "Visalia (CA)\tUSA\tVIS\n" +
//   "Visby\tSweden\tVBY\n" +
//   "Vitoria\tSpain\tVIT\n" +
//   "Vitoria - Eurico de Aguiar Salles Airport\tBrazil\tVIX\n" +
//   "Vryheid\tSouth Africa\tVYD\n" +
//   "\n" +
//   "To travel is to discover that everyone is wrong about other countries\n" +
//   "Aldous Huxley\n" +
//   "\n" +
//   " \n" +
//   " \n" +
//   "W\n" +
//   "Wabush\tCanada\tYWK\n" +
//   "Waco (TX)\tUSA\tACT\n" +
//   "Wagga\tAustralia\tWGA\n" +
//   "Walla Walla (WA)\tUSA\tALW\n" +
//   "Wallis\tWallis and Futuna Islands\tWLS\n" +
//   "Walvis Bay\tSouth Africa\tWVB\n" +
//   "Warrnambool\tAustralia\tWMB\n" +
//   "Warsaw - Frédéric Chopin\tPoland\tWAW\n" +
//   "Washington DC - Baltimore Washington International\tUSA\tBWI\n" +
//   "Washington DC - Dulles International\tUSA\tIAD\n" +
//   "Washington DC - Ronald Reagan National\tUSA\tDCA\n" +
//   "Washington DC\tUSA\tWAS\n" +
//   "Waterloo IA\tUSA\tALO\n" +
//   "Watertown (SD)\tUSA\tATY\n" +
//   "Wausau/Stevens Point (WI)\tUSA\tCWA\n" +
//   "Weipa\tAustralia\tWEI\n" +
//   "Welkom\tSouth Africa\tWEL\n" +
//   "Wellington\tNew Zealand\tWLG\n" +
//   "Wenatchee (WA)\tUSA\tEAT\n" +
//   "West Palm Beach (FL)\tUSA\tPBI\n" +
//   "West Yellowstone (MT)\tUSA\tWYS\n" +
//   "Westerland, Sylt Airport\tGermany\tGWT\n" +
//   "Whakatane\tNew Zealand\tWHK\n" +
//   "Whale Cove, NT\tCanada\tYXN\n" +
//   "Whangarei\tNew Zealand\tWRE\n" +
//   "White Plains (NY)\tUSA\tHPN\n" +
//   "Whitehorse\tCanada\tYXY\n" +
//   "Whitsunday Resort\tAustralia\tHAP\n" +
//   "Whyalla\tAustralia\tWYA\n" +
//   "Wichita Falls (TX)\tUSA\tSPS\n" +
//   "Wichita (KS)\tUSA\tICT\n" +
//   "Wick\tUnited Kingdom\tWIC\n" +
//   "Wickham\tAustralia\tWHM\n" +
//   "Wien (Vienna) - Vienna International\tAustria\tVIE\n" +
//   "Wiesbaden, Air Base\tGermany\tWIE\n" +
//   "Wilkes Barre/Scranton (PA)\tUSA\tAVP\n" +
//   "Williamsport (PA)\tUSA\tIPT\n" +
//   "Williston (ND)\tUSA\tISL\n" +
//   "Wilmington (NC)\tUSA\tILM\n" +
//   "Wilna (Vilnius)\tLithuania\tVNO\n" +
//   "Wiluna\tAustralia\tWUN\n" +
//   "Windhoek - Eros\tNamibia\tERS\n" +
//   "Windhoek - Hosea Kutako International\tNamibia\tWDH\n" +
//   "Windsor Ontario\tCanada\tYQG\n" +
//   "Winnipeg International\tCanada\tYWG\n" +
//   "Wolf Point (MT)\tUSA\tOLF\n" +
//   "Wollongong\tAustralia\tWOL\n" +
//   "Woomera\tAustralia\tUMR\n" +
//   "Worcester (MA)\tUSA\tORH\n" +
//   "Worland (WY)\tUSA\tWRL\n" +
//   "Wrangell (AK)\tUSA\tWRG\n" +
//   "Wuhan\tHubei, PR China\tWUH\n" +
//   "Wyndham\tAustralia\tWYN\n" +
//   " \n" +
//   "XYZ\n" +
//   "Xiamen\tFujian, PR China\tXMN\n" +
//   "Xi'an - Xianyang\tShaanxi, PR China\tXIY\n" +
//   "Yakima (WA)\tUSA\tYKM\n" +
//   "Yakutat (AK)\tUSA\tYAK\n" +
//   "Yakutsk\tRussia\tYKS\n" +
//   "Yamagata, Junmachi\tJapan\tGAJ\n" +
//   "Yamoussoukro\tCôte d'Ivoire\tASK\n" +
//   "Yanbu\tSaudi Arabia\tYNB\n" +
//   "Yangon (Rangoon) - Mingaladon\tMyanmar\tRGN\n" +
//   "Yaounde\tCameroon\tYAO\n" +
//   "Yellowknife\tCanada\tYZF\n" +
//   "Yekaterinburg - Koltsovo Airport\tRussia\tSVX\n" +
//   "Yichang\tHubei, PR China\tYIH\n" +
//   "Yokohama\tJapan\tYOK\n" +
//   "Yuma (AZ)\tUSA\tYUM\n" +
//   "Zacatecas\tMexico\tZCL\n" +
//   "Zadar\tCroatia (Hrvatska)\tZAD\n" +
//   "Zagreb - Zagreb Airport Pleso\tCroatia (Hrvatska)\tZAG\n" +
//   "Zakynthos\tGreece\tZTH\n" +
//   "Zaragoza\tSpain\tZAZ\n" +
//   "Zhob\tPakistan\tPZH\n" +
//   "Zinder\tNiger\tZND\n" +
//   "Zouerate\tMauritania\tOUZ\n" +
//   "Zurich (Zürich) - Kloten\tSwitzerland\tZRH"
// ]
