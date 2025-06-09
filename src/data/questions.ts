
import type { QuizQuestion } from '@/types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "A pregnant client at 32 weeks gestation reports decreased fetal movement. What is the nurse's priority action?",
    answers: [
      "Reassure the client that this is normal in late pregnancy",
      "Instruct the client to perform kick counts",
      "Schedule a biophysical profile immediately",
      "Advise the client to drink cold fluids and count movements"
    ],
    correct: 3,
    explanation: "When decreased fetal movement is reported, the immediate nursing intervention is to have the client drink cold fluids, lie on her left side, and count fetal movements for one hour. If fewer than 10 movements occur in 2 hours, further evaluation is needed."
  },
  {
    id: 2,
    question: "Which finding would indicate a positive sign of pregnancy?",
    answers: [
      "Amenorrhea",
      "Nausea and vomiting",
      "Fetal heart sounds heard by Doppler",
      "Positive home pregnancy test"
    ],
    correct: 2,
    explanation: "Positive signs of pregnancy are those that can only be attributed to the presence of a fetus. These include fetal heart sounds, fetal movement felt by examiner, and visualization of fetus by ultrasound."
  },
  {
    id: 3,
    question: "A client at 28 weeks gestation has a 1-hour glucose challenge test result of 165 mg/dL. What is the next appropriate action?",
    answers: [
      "Repeat the test in 2 weeks",
      "Begin insulin therapy immediately",
      "Schedule a 3-hour glucose tolerance test",
      "Implement dietary modifications only"
    ],
    correct: 2,
    explanation: "A 1-hour glucose challenge test result ≥140 mg/dL (some use ≥130 mg/dL) indicates the need for a 3-hour glucose tolerance test to diagnose gestational diabetes mellitus."
  },
  {
    id: 4,
    question: "Which maternal position is recommended during pregnancy to prevent supine hypotensive syndrome?",
    answers: [
      "Right side-lying",
      "Left side-lying",
      "Semi-Fowler's",
      "Trendelenburg"
    ],
    correct: 1,
    explanation: "Left side-lying position prevents compression of the vena cava and aorta by the gravid uterus, maintaining optimal cardiac output and placental perfusion."
  },
  {
    id: 5,
    question: "A pregnant client at 16 weeks gestation asks about sexual activity during pregnancy. What should the nurse tell her?",
    answers: [
      "Sexual activity should be avoided throughout pregnancy",
      "Sexual activity is safe unless contraindicated by complications",
      "Sexual activity is only safe during the second trimester",
      "Sexual activity requires physician approval each trimester"
    ],
    correct: 1,
    explanation: "Sexual activity during pregnancy is generally safe unless complications such as placenta previa, preterm labor, or rupture of membranes are present."
  },
  {
    id: 6,
    question: "Which laboratory value indicates iron deficiency anemia in pregnancy?",
    answers: [
      "Hemoglobin <11 g/dL in first trimester",
      "Hematocrit <32% in second trimester",
      "Serum ferritin <15 mcg/L",
      "All of the above"
    ],
    correct: 3,
    explanation: "Iron deficiency anemia in pregnancy is indicated by hemoglobin <11 g/dL in first and third trimesters (<10.5 g/dL in second trimester), hematocrit <33% in first and third trimesters (<32% in second trimester), and serum ferritin <15 mcg/L."
  },
  {
    id: 7,
    question: "A client with gestational diabetes asks why she needs to monitor her blood glucose levels. What is the best explanation?",
    answers: [
      "To prevent maternal hypoglycemia",
      "To prevent fetal macrosomia and birth complications",
      "To determine insulin requirements",
      "To monitor for diabetic ketoacidosis"
    ],
    correct: 1,
    explanation: "Monitoring blood glucose in gestational diabetes helps maintain euglycemia to prevent fetal macrosomia, shoulder dystocia, birth trauma, and neonatal hypoglycemia."
  },
  {
    id: 8,
    question: "Which symptom should a pregnant client report immediately to her healthcare provider?",
    answers: [
      "Mild ankle edema at the end of the day",
      "Frequent urination in the first trimester",
      "Severe headache with visual changes",
      "Mild shortness of breath when climbing stairs"
    ],
    correct: 2,
    explanation: "Severe headache with visual changes may indicate preeclampsia, a serious pregnancy complication requiring immediate medical attention."
  },
  {
    id: 9,
    question: "The recommended weight gain for a woman with a normal pre-pregnancy BMI is:",
    answers: [
      "15-20 pounds",
      "25-35 pounds",
      "35-45 pounds",
      "40-50 pounds"
    ],
    correct: 1,
    explanation: "For women with normal BMI (18.5-24.9), the recommended weight gain is 25-35 pounds during pregnancy."
  },
  {
    id: 10,
    question: "A client at 36 weeks gestation reports leaking clear fluid from her vagina. What should the nurse do first?",
    answers: [
      "Perform a sterile vaginal examination",
      "Test the fluid with nitrazine paper",
      "Obtain fetal heart rate tracing",
      "Position client in Trendelenburg"
    ],
    correct: 1,
    explanation: "Testing with nitrazine paper helps determine if the fluid is amniotic fluid (turns blue, pH >6.5) versus normal vaginal secretions (remains yellow, pH <6.0)."
  },
  {
    id: 11,
    question: "Which finding in a prenatal client would require immediate intervention?",
    answers: [
      "Blood pressure 130/85 mmHg at 20 weeks",
      "Fundal height measurement equal to weeks gestation",
      "Absence of fetal movement for 12 hours",
      "Weight gain of 2 pounds in one week at 32 weeks"
    ],
    correct: 2,
    explanation: "Absence of fetal movement for an extended period may indicate fetal compromise and requires immediate evaluation."
  },
  {
    id: 12,
    question: "A pregnant client asks about air travel during pregnancy. What information should the nurse provide?",
    answers: [
      "Air travel is contraindicated during pregnancy",
      "Air travel is safe until 36 weeks for uncomplicated pregnancies",
      "Air travel requires physician clearance at any gestational age",
      "Air travel is only safe during the first trimester"
    ],
    correct: 1,
    explanation: "Most airlines allow travel until 36 weeks gestation for uncomplicated pregnancies. After 36 weeks, risk of preterm labor increases."
  },
  {
    id: 13,
    question: "Which nutritional supplement is most important during the first trimester?",
    answers: [
      "Iron",
      "Calcium",
      "Folic acid",
      "Vitamin D"
    ],
    correct: 2,
    explanation: "Folic acid is crucial during the first trimester (and preconceptionally) to prevent neural tube defects. The recommended dose is 400-800 mcg daily."
  },
  {
    id: 14,
    question: "A client with a history of three spontaneous abortions asks about her current pregnancy risk. This client is classified as:",
    answers: [
      "Primigravida",
      "Multigravida with habitual abortion",
      "Grand multipara",
      "High-risk pregnancy"
    ],
    correct: 1,
    explanation: "Habitual abortion is defined as three or more consecutive spontaneous abortions. This client requires specialized care and monitoring."
  },
  {
    id: 15,
    question: "Which assessment finding at 28 weeks gestation would concern the nurse most?",
    answers: [
      "Braxton Hicks contractions",
      "Increased vaginal discharge",
      "Regular uterine contractions every 10 minutes",
      "Mild dependent edema"
    ],
    correct: 2,
    explanation: "Regular uterine contractions before 37 weeks may indicate preterm labor and require immediate evaluation and intervention."
  },
  {
    id: 16,
    question: "A pregnant client asks about exercise during pregnancy. What is the best recommendation?",
    answers: [
      "Avoid all exercise during pregnancy",
      "Continue pre-pregnancy exercise routine without modification",
      "Engage in moderate exercise for 30 minutes most days",
      "Only participate in water-based exercises"
    ],
    correct: 2,
    explanation: "ACOG recommends 150 minutes of moderate-intensity exercise weekly during pregnancy for women without contraindications."
  },
  {
    id: 17,
    question: "Which finding indicates a positive contraction stress test?",
    answers: [
      "No late decelerations with contractions",
      "Late decelerations with 50% or more contractions",
      "Variable decelerations with contractions",
      "Early decelerations with contractions"
    ],
    correct: 1,
    explanation: "A positive contraction stress test shows late decelerations with 50% or more contractions, indicating potential uteroplacental insufficiency."
  },
  {
    id: 18,
    question: "A client at 34 weeks gestation has mild preeclampsia. Which symptom would indicate progression to severe preeclampsia?",
    answers: [
      "Blood pressure 150/95 mmHg",
      "Proteinuria 2+ on dipstick",
      "Persistent severe headache",
      "Trace pedal edema"
    ],
    correct: 2,
    explanation: "Severe features of preeclampsia include severe headache, visual disturbances, epigastric pain, and altered mental status."
  },
  {
    id: 19,
    question: "The purpose of administering betamethasone to a client in preterm labor is to:",
    answers: [
      "Stop uterine contractions",
      "Accelerate fetal lung maturity",
      "Prevent maternal infection",
      "Reduce maternal blood pressure"
    ],
    correct: 1,
    explanation: "Corticosteroids like betamethasone are given to accelerate fetal lung maturity and reduce risk of respiratory distress syndrome in preterm infants."
  },
  {
    id: 20,
    question: "Which client would be at highest risk for developing gestational diabetes?",
    answers: [
      "25-year-old primigravida with normal BMI",
      "35-year-old multigravida with family history of diabetes",
      "20-year-old primigravida who exercises regularly",
      "30-year-old multigravida with previous normal pregnancies"
    ],
    correct: 1,
    explanation: "Risk factors for gestational diabetes include maternal age >35, family history of diabetes, obesity, and previous gestational diabetes."
  },
  {
    id: 21,
    question: "A client at 12 weeks gestation reports spotting and mild cramping. The cervix is closed on examination. This is classified as:",
    answers: [
      "Inevitable abortion",
      "Incomplete abortion",
      "Threatened abortion",
      "Missed abortion"
    ],
    correct: 2,
    explanation: "Threatened abortion presents with vaginal bleeding and cramping but the cervix remains closed and fetal heart tones are present."
  },
  {
    id: 22,
    question: "Which medication is contraindicated during pregnancy?",
    answers: [
      "Acetaminophen",
      "Warfarin",
      "Insulin",
      "Methyldopa"
    ],
    correct: 1,
    explanation: "Warfarin crosses the placenta and can cause fetal bleeding and teratogenic effects. Heparin is the anticoagulant of choice during pregnancy."
  },
  {
    id: 23,
    question: "A pregnant client with cardiac disease should be taught to report which symptom immediately?",
    answers: [
      "Mild fatigue after activity",
      "Increased appetite",
      "Sudden onset of dyspnea",
      "Occasional dizziness when standing"
    ],
    correct: 2,
    explanation: "Sudden dyspnea may indicate cardiac decompensation or pulmonary edema, requiring immediate medical attention."
  },
  {
    id: 24,
    question: "The recommended screening for Group B Streptococcus occurs at:",
    answers: [
      "28-32 weeks gestation",
      "35-37 weeks gestation",
      "32-34 weeks gestation",
      "At the first prenatal visit"
    ],
    correct: 1,
    explanation: "GBS screening with vaginal-rectal culture is performed at 35-37 weeks gestation to guide intrapartum antibiotic prophylaxis."
  },
  {
    id: 25,
    question: "Which finding would indicate polyhydramnios?",
    answers: [
      "Amniotic fluid index <5 cm",
      "Amniotic fluid index >25 cm",
      "Fundal height less than expected for gestational age",
      "Decreased fetal movement"
    ],
    correct: 1,
    explanation: "Polyhydramnios (excessive amniotic fluid) is diagnosed when amniotic fluid index >25 cm or maximum vertical pocket >8 cm."
  },
  {
    id: 26,
    question: "A laboring client's fetal heart rate shows late decelerations. What is the nurse's priority action?",
    answers: [
      "Increase IV fluid rate",
      "Position client on left side",
      "Administer oxygen at 8-10 L/min",
      "All of the above"
    ],
    correct: 3,
    explanation: "Late decelerations indicate uteroplacental insufficiency. Interventions include left lateral positioning, oxygen administration, and IV fluid bolus to improve placental perfusion."
  },
  {
    id: 27,
    question: "A primigravida at 41 weeks gestation is admitted for labor induction. Which method is contraindicated if the Bishop score is unfavorable?",
    answers: [
      "Pitocin infusion",
      "Amniotomy",
      "Prostaglandin gel",
      "Membrane stripping"
    ],
    correct: 1,
    explanation: "Amniotomy should not be performed with an unfavorable cervix as it increases risk of cord prolapse and infection without promoting cervical ripening."
  },
  {
    id: 28,
    question: "Which assessment finding indicates the transition phase of labor?",
    answers: [
      "Contractions every 2-3 minutes lasting 60-90 seconds",
      "Cervical dilation 8-10 cm",
      "Increased bloody show",
      "All of the above"
    ],
    correct: 3,
    explanation: "Transition phase characteristics include contractions every 2-3 minutes lasting 60-90 seconds, cervical dilation 8-10 cm, and increased bloody show."
  },
  {
    id: 29,
    question: "A laboring client suddenly reports severe abdominal pain and the fetal heart rate shows bradycardia. What complication should the nurse suspect?",
    answers: [
      "Placental abruption",
      "Uterine rupture",
      "Cord prolapse",
      "Placenta previa"
    ],
    correct: 1,
    explanation: "Sudden severe abdominal pain with fetal bradycardia and loss of fetal station may indicate uterine rupture, especially in clients with previous cesarean delivery."
  },
  {
    id: 30,
    question: "When should the nurse encourage pushing during the second stage of labor?",
    answers: [
      "As soon as the cervix is completely dilated",
      "When the client feels the urge to push",
      "Every contraction regardless of urge",
      "Only when the fetal head is visible"
    ],
    correct: 1,
    explanation: "Delayed pushing (laboring down) until the client feels the urge reduces maternal fatigue and may improve outcomes."
  },
  {
    id: 31,
    question: "Which fetal heart rate pattern requires immediate intervention?",
    answers: [
      "Baseline rate 140-150 bpm with moderate variability",
      "Early decelerations with contractions",
      "Prolonged deceleration below 70 bpm for 3 minutes",
      "Accelerations with fetal movement"
    ],
    correct: 2,
    explanation: "Prolonged deceleration lasting >2 minutes indicates severe fetal hypoxia requiring immediate intervention and possible emergency delivery."
  },
  {
    id: 32,
    question: "A client receives an epidural at 4 cm dilation. Which complication should the nurse monitor for?",
    answers: [
      "Maternal hypotension",
      "Fetal heart rate changes",
      "Prolonged labor",
      "All of the above"
    ],
    correct: 3,
    explanation: "Epidural complications include maternal hypotension (affecting uteroplacental perfusion), potential fetal heart rate changes, and possibly prolonged labor."
  },
  {
    id: 33,
    question: "Which position is best for a client with a persistent occiput posterior presentation?",
    answers: [
      "Supine with legs elevated",
      "Hands and knees",
      "Right side-lying",
      "Semi-Fowler's"
    ],
    correct: 1,
    explanation: "Hands and knees position uses gravity to help rotate the fetus from posterior to anterior position."
  },
  {
    id: 34,
    question: "A laboring client's membranes rupture and the nurse observes thick, green amniotic fluid. This indicates:",
    answers: [
      "Normal finding in prolonged labor",
      "Meconium-stained fluid requiring monitoring",
      "Infection requiring antibiotic therapy",
      "Imminent delivery"
    ],
    correct: 1,
    explanation: "Thick, green amniotic fluid indicates meconium passage, which may suggest fetal distress and requires continuous fetal monitoring and pediatric team notification."
  },
  {
    id: 35,
    question: "The normal duration of the second stage of labor for a primigravida is:",
    answers: [
      "Up to 1 hour",
      "Up to 2 hours",
      "Up to 3 hours",
      "Up to 4 hours"
    ],
    correct: 2,
    explanation: "Second stage duration limits are 3 hours for primigravidas and 2 hours for multiparas (may be extended by 1 hour with epidural)."
  },
  {
    id: 36,
    question: "Which intervention helps prevent perineal lacerations during delivery?",
    answers: [
      "Rapid delivery of the head",
      "Controlled delivery of the head",
      "Immediate episiotomy for all clients",
      "Fundal pressure during crowning"
    ],
    correct: 1,
    explanation: "Controlled delivery of the fetal head allows gradual stretching of perineal tissues, reducing risk of lacerations."
  },
  {
    id: 37,
    question: "A client in active labor has contractions every 2 minutes lasting 90 seconds. The nurse should assess for:",
    answers: [
      "Adequate rest between contractions",
      "Signs of uterine tetany",
      "Fetal compromise",
      "All of the above"
    ],
    correct: 3,
    explanation: "Frequent, prolonged contractions may not allow adequate uterine rest (should be >60 seconds between contractions), may indicate tetany, and can compromise fetal oxygenation."
  },
  {
    id: 38,
    question: "Which finding indicates successful epidural anesthesia?",
    answers: [
      "Complete motor blockade of legs",
      "Loss of sensation to ice or cold",
      "Inability to feel contractions",
      "Loss of urge to push"
    ],
    correct: 1,
    explanation: "Successful epidural provides sensory blockade (loss of pain sensation) while preserving some motor function for pushing."
  },
  {
    id: 39,
    question: "A client in labor develops a fever of 100.8°F. What is the priority nursing action?",
    answers: [
      "Administer acetaminophen",
      "Obtain blood cultures",
      "Increase IV fluid rate",
      "Assess fetal heart rate"
    ],
    correct: 3,
    explanation: "Maternal fever can cause fetal tachycardia and distress. The priority is assessing fetal well-being, then determining the cause of fever."
  },
  {
    id: 40,
    question: "Which statement about vacuum extraction is correct?",
    answers: [
      "It can be used for face presentations",
      "Maximum number of cup detachments is 5",
      "It should not be used if labor has been prolonged",
      "Cup should not remain on fetal head >20-30 minutes"
    ],
    correct: 3,
    explanation: "Vacuum extraction time limit is 20-30 minutes total to prevent fetal injury. Maximum of 3 cup detachments is allowed."
  },
  {
    id: 41,
    question: "A client with a previous cesarean delivery desires VBAC. Which factor makes her a good candidate?",
    answers: [
      "Previous low transverse uterine incision",
      "Estimated fetal weight <4000 g",
      "Adequate pelvis",
      "All of the above"
    ],
    correct: 3,
    explanation: "VBAC candidates should have previous low transverse incision, appropriate fetal size, adequate pelvis, and no contraindications to vaginal delivery."
  },
  {
    id: 42,
    question: "Which medication can be used to stop preterm labor?",
    answers: [
      "Magnesium sulfate",
      "Terbutaline",
      "Nifedipine",
      "All of the above"
    ],
    correct: 3,
    explanation: "Tocolytics used to stop preterm labor include magnesium sulfate, beta-agonists (terbutaline), and calcium channel blockers (nifedipine)."
  },
  {
    id: 43,
    question: "A client receiving magnesium sulfate for preeclampsia shows signs of toxicity. What is the antidote?",
    answers: [
      "Calcium chloride",
      "Calcium gluconate",
      "Sodium bicarbonate",
      "Naloxone"
    ],
    correct: 1,
    explanation: "Calcium gluconate is the antidote for magnesium sulfate toxicity. It should be readily available when administering magnesium sulfate."
  },
  {
    id: 44,
    question: "Which assessment finding indicates shoulder dystocia?",
    answers: [
      "Fetal head delivers but retracts against perineum",
      "Prolonged second stage of labor",
      "Meconium-stained amniotic fluid",
      "Fetal heart rate decelerations"
    ],
    correct: 0,
    explanation: "\"Turtle sign\" - fetal head delivering then retracting against the perineum - is the classic sign of shoulder dystocia."
  },
  {
    id: 45,
    question: "The most common cause of postpartum hemorrhage is:",
    answers: [
      "Cervical laceration",
      "Uterine atony",
      "Retained placental fragments",
      "Coagulation disorders"
    ],
    correct: 1,
    explanation: "Uterine atony (failure of uterine muscles to contract) accounts for 80% of postpartum hemorrhages."
  },
  {
    id: 46,
    question: "Which client factor increases risk for cesarean delivery?",
    answers: [
      "Maternal age >35 years",
      "Fetal macrosomia (>4000 g)",
      "Previous cesarean delivery",
      "All of the above"
    ],
    correct: 3,
    explanation: "Risk factors for cesarean delivery include advanced maternal age, fetal macrosomia, previous cesarean, breech presentation, and multiple gestation."
  },
  {
    id: 47,
    question: "A client in labor receives nalbuphine (Nubain) for pain relief. The nurse should monitor for:",
    answers: [
      "Respiratory depression",
      "Hypotension",
      "Nausea and vomiting",
      "All of the above"
    ],
    correct: 3,
    explanation: "Opioid analgesics can cause respiratory depression, hypotension, and nausea/vomiting in both mother and neonate."
  },
  {
    id: 48,
    question: "Which action promotes normal labor progression?",
    answers: [
      "Frequent position changes",
      "Adequate hydration",
      "Emotional support",
      "All of the above"
    ],
    correct: 3,
    explanation: "Normal labor progression is promoted by position changes, adequate hydration, nutrition, and continuous emotional support."
  },
  {
    id: 49,
    question: "A client has PROM at 34 weeks gestation. Which complication is the nurse most concerned about?",
    answers: [
      "Infection",
      "Preterm labor",
      "Cord prolapse",
      "All of the above"
    ],
    correct: 3,
    explanation: "PROM complications include infection (chorioamnionitis), preterm labor, cord prolapse, and abruptio placentae."
  },
  {
    id: 50,
    question: "Which finding indicates effective uterine contractions in active labor?",
    answers: [
      "Contractions every 5 minutes lasting 30 seconds",
      "Contractions every 2-3 minutes lasting 60-90 seconds",
      "Irregular contractions of varying intensity",
      "Contractions every 10 minutes lasting 45 seconds"
    ],
    correct: 1,
    explanation: "Effective contractions in active labor occur every 2-3 minutes, last 60-90 seconds, and are strong enough to cause cervical change."
  },
  {
    id: 51,
    question: "Which assessment finding on postpartum day 1 would concern the nurse most?",
    answers: [
      "Lochia rubra with small clots",
      "Fundus firm at umbilicus level",
      "Fundus boggy and displaced to right",
      "Moderate afterpains with breastfeeding"
    ],
    correct: 2,
    explanation: "A boggy, displaced fundus indicates uterine atony and possible bladder distention, increasing hemorrhage risk."
  },
  {
    id: 52,
    question: "A breastfeeding mother asks when her menstrual periods will return. The nurse should tell her:",
    answers: [
      "Menstruation resumes in 6-8 weeks regardless of feeding method",
      "Breastfeeding may delay menstruation for several months",
      "Menstruation will not return while breastfeeding",
      "Menstruation resumes when breastfeeding stops"
    ],
    correct: 1,
    explanation: "Lactational amenorrhea can last 6 months or longer in exclusively breastfeeding women due to prolactin suppression of ovulation."
  },
  {
    id: 53,
    question: "Which teaching point is most important for a client with a fourth-degree perineal laceration?",
    answers: [
      "Take stool softeners as prescribed",
      "Use sitz baths for comfort",
      "Apply ice packs for 24 hours",
      "Perform Kegel exercises"
    ],
    correct: 0,
    explanation: "Fourth-degree lacerations involve the rectal sphincter. Preventing constipation and hard stools is crucial to prevent further tissue damage."
  },
  {
    id: 54,
    question: "A postpartum client develops mastitis. Which symptom is most characteristic?",
    answers: [
      "Bilateral breast engorgement",
      "Unilateral breast pain with flu-like symptoms",
      "Cracked, sore nipples",
      "Decreased milk production"
    ],
    correct: 1,
    explanation: "Mastitis typically presents as unilateral breast pain, warmth, redness, and systemic symptoms like fever and chills."
  },
  {
    id: 55,
    question: "Which medication is commonly prescribed for postpartum depression?",
    answers: [
      "Fluoxetine (Prozac)",
      "Sertraline (Zoloft)",
      "Paroxetine (Paxil)",
      "All of the above may be used"
    ],
    correct: 3,
    explanation: "SSRIs like sertraline and paroxetine are preferred for breastfeeding mothers, while fluoxetine has a longer half-life but may still be used."
  },
  {
    id: 56,
    question: "Normal postpartum weight loss in the first week is approximately:",
    answers: [
      "5-8 pounds",
      "10-12 pounds",
      "15-20 pounds",
      "20-25 pounds"
    ],
    correct: 1,
    explanation: "Initial weight loss includes baby weight (7-8 lbs), placenta (1-2 lbs), amniotic fluid (2 lbs), and blood loss, totaling about 10-12 pounds."
  },
  {
    id: 57,
    question: "Which factor increases the risk of postpartum hemorrhage?",
    answers: [
      "Prolonged labor",
      "Multiple gestation",
      "Polyhydramnios",
      "All of the above"
    ],
    correct: 3,
    explanation: "Risk factors for PPH include uterine overdistention (twins, polyhydramnios), prolonged labor, grand multiparity, and precipitous delivery."
  },
  {
    id: 58,
    question: "A postpartum client reports passing several large clots. What should the nurse do first?",
    answers: [
      "Document the finding as normal",
      "Assess fundal firmness and position",
      "Encourage increased fluid intake",
      "Notify the healthcare provider"
    ],
    correct: 1,
    explanation: "Large clots may indicate uterine atony. The first action is assessing uterine contraction and position before other interventions."
  },
  {
    id: 59,
    question: "Which finding indicates successful breastfeeding?",
    answers: [
      "Feeding every 4 hours for 10 minutes",
      "Baby appears satisfied after feeding",
      "Audible swallowing during feeding",
      "Both B and C"
    ],
    correct: 3,
    explanation: "Successful breastfeeding indicators include baby satisfaction, audible swallowing, adequate wet diapers, and appropriate weight gain."
  },
  {
    id: 60,
    question: "Postpartum blues typically occur:",
    answers: [
      "During pregnancy",
      "Within 2-3 days after delivery",
      "2-4 weeks postpartum",
      "3-6 months postpartum"
    ],
    correct: 1,
    explanation: "Postpartum blues occur 2-3 days after delivery, peak around day 5, and resolve within 2 weeks due to hormonal changes."
  },
  {
    id: 61,
    question: "Which client is at highest risk for postpartum infection?",
    answers: [
      "Vaginal delivery with intact perineum",
      "Cesarean delivery after prolonged labor",
      "Vaginal delivery with episiotomy",
      "Scheduled cesarean delivery"
    ],
    correct: 1,
    explanation: "Risk factors for infection include cesarean delivery, prolonged labor, prolonged rupture of membranes, and multiple vaginal examinations."
  },
  {
    id: 62,
    question: "The nurse teaches a postpartum client about danger signs to report. Which symptom requires immediate attention?",
    answers: [
      "Mild afterpains during breastfeeding",
      "Passing small clots in lochia",
      "Temperature of 100.8°F on postpartum day 2",
      "Feeling tearful and overwhelmed"
    ],
    correct: 2,
    explanation: "Fever >100.4°F (38°C) after the first 24 hours postpartum may indicate infection and requires evaluation."
  },
  {
    id: 63,
    question: "Which intervention helps prevent thromboembolism in postpartum clients?",
    answers: [
      "Early ambulation",
      "Adequate hydration",
      "Sequential compression devices for high-risk clients",
      "All of the above"
    ],
    correct: 3,
    explanation: "VTE prevention includes early mobilization, adequate hydration, and mechanical/pharmacological prophylaxis for high-risk clients."
  },
  {
    id: 64,
    question: "A client had a cesarean delivery 2 days ago. Which assessment finding is most concerning?",
    answers: [
      "Incision site slightly red with minimal drainage",
      "Passing flatus and requesting regular diet",
      "Fundus firm, 2 fingerbreadths below umbilicus",
      "Lochia serosa with mild odor"
    ],
    correct: 0, // "A) Incision site slightly red with minimal drainage" indicates potential infection
    explanation: "Any signs of incision infection (redness, drainage, increased pain) require assessment and possible intervention."
  },
  {
    id: 65,
    question: "Which contraceptive method is recommended for exclusively breastfeeding mothers?",
    answers: [
      "Combined oral contraceptives",
      "Progestin-only pills",
      "Depo-Provera injection",
      "Both B and C"
    ],
    correct: 3,
    explanation: "Progestin-only methods don't affect milk supply, unlike combined hormonal contraceptives which may decrease milk production."
  },
  {
    id: 66,
    question: "The normal progression of lochia is:",
    answers: [
      "Rubra → Alba → Serosa",
      "Serosa → Rubra → Alba",
      "Rubra → Serosa → Alba",
      "Alba → Serosa → Rubra"
    ],
    correct: 2,
    explanation: "Lochia progresses from rubra (red, days 1-3) to serosa (pink-brown, days 4-10) to alba (white/clear, days 10-14)."
  },
  {
    id: 67,
    question: "Which measure helps relieve engorgement in a non-breastfeeding mother?",
    answers: [
      "Pumping milk regularly",
      "Applying ice packs",
      "Taking hot showers",
      "Breast massage"
    ],
    correct: 1,
    explanation: "For non-breastfeeding mothers, ice packs and supportive bra help with engorgement. Avoid milk removal which stimulates production."
  },
  {
    id: 68,
    question: "A postpartum client reports severe perineal pain despite pain medication. What should the nurse assess for?",
    answers: [
      "Hematoma formation",
      "Infection",
      "Inadequate pain management",
      "All of the above"
    ],
    correct: 3,
    explanation: "Severe pain may indicate complications like hematoma or infection, or may require adjustment of pain management plan."
  },
  {
    id: 69,
    question: "Which exercise is safe to begin immediately postpartum?",
    answers: [
      "Kegel exercises",
      "Abdominal crunches",
      "Running",
      "Heavy weightlifting"
    ],
    correct: 0,
    explanation: "Kegel exercises can begin immediately to strengthen pelvic floor muscles. Other exercises should be delayed until physician clearance."
  },
  {
    id: 70,
    question: "A client asks about resuming sexual activity postpartum. What information should the nurse provide?",
    answers: [
      "Sexual activity can resume immediately after delivery",
      "Wait until lochia stops completely",
      "Wait until after 6-week postpartum checkup",
      "Wait until menstruation resumes"
    ],
    correct: 2,
    explanation: "Sexual activity is generally resumed after physician clearance at 6-week postpartum visit when healing is assessed."
  },
  {
    id: 71,
    question: "Which finding indicates postpartum cardiomyopathy?",
    answers: [
      "Mild shortness of breath with exertion",
      "Orthopnea and paroxysmal nocturnal dyspnea",
      "Occasional palpitations",
      "Fatigue and mood changes"
    ],
    correct: 1,
    explanation: "Postpartum cardiomyopathy presents with heart failure symptoms including orthopnea, PND, and decreased exercise tolerance."
  },
  {
    id: 72,
    question: "The nurse notices a postpartum client has not voided in 8 hours. What is the priority action?",
    answers: [
      "Encourage increased fluid intake",
      "Assist client to bathroom",
      "Assess for bladder distention",
      "Insert urinary catheter"
    ],
    correct: 2,
    explanation: "Urinary retention is common postpartum. Assessment for distention guides intervention needs before implementing measures."
  },
  {
    id: 73,
    question: "Which client requires Rh immune globulin (RhoGAM) postpartum?",
    answers: [
      "Rh-positive mother with Rh-positive baby",
      "Rh-negative mother with Rh-positive baby",
      "Rh-positive mother with Rh-negative baby",
      "Rh-negative mother with Rh-negative baby"
    ],
    correct: 1,
    explanation: "RhoGAM prevents sensitization in Rh-negative mothers who deliver Rh-positive babies, protecting future pregnancies."
  }
];
