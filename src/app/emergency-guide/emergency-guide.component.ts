import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-guide',
  templateUrl: './emergency-guide.component.html',
  styleUrls: ['./emergency-guide.component.scss']
})
export class EmergencyGuideComponent implements OnInit {

  constructor() { }

  listGuide: any = [];

  displayImages: any = [];

  emergencyOpt: any = [];


  ngOnInit(): void {

    this.listGuide = [{
      "label": "Bleed and Cuts",
      "value": "Bleed and Cuts",
      "icon": "knife.png",
      "image-materials": [
        { "filename": "incision.jpg" },
        { "filename": "lac.jpg" },
        { "filename": "puncture.jpg" },
        { "filename": "impaled.jpg" }
      ]
    },{
      "label": "Concussion",
      "value": "Concussion",
      "icon": "concussion.png",
      "image-materials": [
        { "filename": "concussion.jpg" },
      ]



    },{
      "label": "Animal Bite",
      "value": "Animal Bite",
      "icon": "bite.png",
      "image-materials": [
        { "filename": "animal.jpg" },
        { "filename": "bee.jpg" },
        { "filename": "snake.jpg" },
        { "filename": "spider.jpg" },



      ]
    },{
      "label": "Abdominal Pain & Diarrhea",
      "value": "Abdominal Pain & Diarrhea",
      "icon": "aa_abdominal.png",
      "image-materials": [
        { "filename": "42.jpg" },
        { "filename": "44.jpg" },
      ]
    },{
      "label": "Anaphylaxis",
      "value": "Anaphylaxis",
      "icon": "aa_anaphylaxis.png",
      "image-materials": [
        { "filename": "32.jpg" },
      ]
    },{
      "label": "Back Pain",
      "value": "Back Pain",
      "icon": "aa_back.png",
      "image-materials": [
        { "filename": "48.jpg" },
      ]
    },{
      "label": "Cardiac Arrest",
      "value": "Cardiac Arrest",
      "icon": "aa_cardiac.png",
      "image-materials": [
        { "filename": "2.jpg" },
        { "filename": "SUDDEN-CARDIAC-ARREST-01.jpg" },

      ]
    },{
      "label": "Chest Pain",
      "value": "Chest Pain",
      "icon": "aa_chest.png",
      "image-materials": [
        { "filename": "1.jpg" },
        { "filename": "CHEST-PAIN-01.jpg" },
        { "filename": "CHEST-PAIN-02.jpg" },
      ]
    },{
      "label": "Chickenpox",
      "value": "Chickenpox",
      "icon": "aa_pox.png",
      "image-materials": [
        { "filename": "30.jpg" },
      ]
    },{
      "label": "Difficulty in Breathing",
      "value": "Difficulty in Breathing",
      "icon": "aa_diff.png",
      "image-materials": [
        { "filename": "25.jpg" },
      ]
    },{
      "label": "Dislocation & Fracture",
      "value": "Dislocation & Fracture",
      "icon": "aa_fracture.png",
      "image-materials": [
        { "filename": "8.jpg" },
        { "filename": "9.jpg" },
      ]
    },{
      "label": "Electrocution",
      "value": "Electrocution",
      "icon": "aa_electro.png",
      "image-materials": [
        { "filename": "46.jpg" },
      ]
    },
    // {
    //   "label": "Specifics",
    //   "icon": "",
    //   "image-materials": [
    //     { "filename": "cardiac1.jpg" },
    //     { "filename": "stroke1.jpg" },
    //     { "filename": "stroke2.jpg" },
    //     { "filename": "chestpain1.jpg" },
    //     { "filename": "chestpain2.jpg" },
    //     { "filename": "cramps1.jpg" },
    //     { "filename": "cramps2.jpg" },
    //     { "filename": "dislocation1.jpg" },
    //     { "filename": "dislocation2.jpg" },
    //     { "filename": "fracture1.jpg" },
    //     { "filename": "fracture2.jpg" },
    //     { "filename": "seizure1.jpg" },
    //     { "filename": "seizure2.jpg" },
    //     { "filename": "sprain1.jpg" },
    //     { "filename": "sprain2.jpg" },
    //     { "filename": "strain1.jpg" },
    //     { "filename": "strain2.jpg" },


    //   ]
    // },
    {
      "label": "Burns",
      "value": "Burns",
      "icon": "fire.png",
      "image-materials": [
        { "filename": "1stdburn.jpg" },
        { "filename": "2nddburn.jpg" },
        { "filename": "3rddburn.jpg" },

      ]
    },{
      "label": "Choking",
      "value": "Choking",
      "icon": "choking.png",
      "image-materials": [
        { "filename": "choking.jpg" },
      ]
    },{
      "label": "Poison",
      "value": "Poison",
      "icon": "skull.png",
      "image-materials": [
        { "filename": "inhalation.jpg" },
        { "filename": "ingestion.jpg" },
        { "filename": "absorption.jpg" },


      ]
    },{
      "label": "Eye Injury",
      "value": "Eye Injury",
      "icon": "aa_eye.png",
      "image-materials": [
        { "filename": "47.jpg" },
      ]
    },{
      "label": "Flu",
      "value": "Flu",
      "icon": "aa_flu.png",
      "image-materials": [
        { "filename": "31.jpg" },
      ]
    },{
      "label": "Headache & Dizziness-Vertigo",
      "value": "Headache & Dizziness-Vertigo",
      "icon": "aa_head.png",
      "image-materials": [
        { "filename": "43.jpg" },
        {"filename": "45.jpg" },

      ]
    },{
      "label": "Heat Exhaustion & Heat Stroke",
      "value": "Heat Exhaustion & Heat Stroke",
      "icon": "aa_heat.png",
      "image-materials": [
        { "filename": "27.jpg" },
        { "filename": "Heat Stroke.jpg" },


      ]
    },{
      "label": "Hypoglycemia",
      "value": "Hypoglycemia",
      "icon": "aa_hypo.png",
      "image-materials": [
        { "filename": "33.jpg" },
      ]
    },{
      "label": "Hypothermia",
      "value": "Hypothermia",
      "icon": "aa_hypot.png",
      "image-materials": [
        { "filename": "29.jpg" },
      ]
    },{
      "label": "Nose Bleed",
      "value": "Nose Bleed",
      "icon": "aa_nose.png",
      "image-materials": [
        { "filename": "40.jpg" },
      ]
    },{
      "label": "Seizure",
      "value": "Seizure",
      "icon": "aa_seizure.png",
      "image-materials": [
        { "filename": "SEIZURE-01.jpg" },
      ]
    },{
      "label": "Sprain, Strain & Cramps",
      "value": "Sprain, Strain & Cramps",
      "icon": "aa_sprain.png",
      "image-materials": [
        { "filename": "CRAMPS-01.jpg" },
        { "filename": "CRAMPS-02.jpg" },
        { "filename": "SPRAIN-01.jpg" },
        { "filename": "SPRAIN-02.jpg" },
        { "filename": "STRAIN-01.jpg" },
        { "filename": "STRAIN-02.jpg" },

      ]
    },{
      "label": "Stroke",
      "value": "Stroke",
      "icon": "aa_stroke.png",
      "image-materials": [
        { "filename": "1st.jpg" },
        { "filename": "2nd.jpg" },
        { "filename": "3rd.jpg" },


      ]
    }];



    this.listGuide = this.sortBy(this.listGuide, "label");



  }

  selectGuideTest(data){

    let index = this.findWithAttr(this.listGuide, 'value', data.value);

    this.guideTitle = this.listGuide[index]['label'];
    this.displayImages = this.listGuide[index]['image-materials'];
  }


  findWithAttr(array, attr, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	}

  guideTitle: string;
  selectGuide(data){

    this.guideTitle = data['label'];
    this.displayImages = data['image-materials'];
  }

  sortBy(multiArray: any, field: string, orderBy: string = "desc"){
    return multiArray.sort((a: any, b: any) => {

			let firstField: any = "";
			let secondField: any = "";

			if(orderBy == "asc"){
        firstField = b[field];
        secondField = a[field];

      }else{
        firstField = a[field];
        secondField = b[field];
      }

      return (firstField || "").toString().localeCompare((secondField || "").toString());
    })
  }



}
