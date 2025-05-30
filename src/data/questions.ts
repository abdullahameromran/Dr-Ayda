import type { QuizQuestion } from '@/types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the normal range for fetal heart rate?",
    answers: ["60-100 bpm", "110-160 bpm", "170-200 bpm", "40-80 bpm"],
    correct: 1,
    explanation: "The normal fetal heart rate ranges from 110 to 160 beats per minute."
  },
  {
    id: 2,
    question: "Which hormone is primarily responsible for maintaining pregnancy?",
    answers: ["Oxytocin", "Progesterone", "Estrogen", "LH"],
    correct: 1,
    explanation: "Progesterone maintains the uterine lining and supports pregnancy."
  },
  {
    id: 3,
    question: "When is the usual time for quickening (first fetal movement)?",
    answers: ["8-10 weeks", "12-14 weeks", "16-20 weeks", "24-28 weeks"],
    correct: 2,
    explanation: "Quickening typically occurs between 16 and 20 weeks of gestation."
  },
  {
    id: 4,
    question: "What is the most common site for ectopic pregnancy?",
    answers: ["Ovary", "Fallopian tube", "Cervix", "Abdomen"],
    correct: 1,
    explanation: "The fallopian tube is the most common location for ectopic pregnancies."
  },
  {
    id: 5,
    question: "Which vitamin is essential to prevent neural tube defects?",
    answers: ["Vitamin B12", "Folic acid", "Vitamin D", "Iron"],
    correct: 1,
    explanation: "Folic acid supplementation reduces the risk of neural tube defects."
  },
  {
    id: 6,
    question: "What is the purpose of the Apgar score?",
    answers: ["Evaluate fetal growth", "Assess newborn health status", "Predict maternal labor duration", "Measure blood glucose"],
    correct: 1,
    explanation: "The Apgar score assesses the newborn's health immediately after birth."
  },
  {
    id: 7,
    question: "Which condition is characterized by high blood pressure and proteinuria during pregnancy?",
    answers: ["Gestational diabetes", "Preeclampsia", "Eclampsia", "Placenta previa"],
    correct: 1,
    explanation: "Preeclampsia involves hypertension and proteinuria after 20 weeks of pregnancy."
  },
  {
    id: 8,
    question: "During which trimester does most fetal organ development occur?",
    answers: ["First trimester", "Second trimester", "Third trimester", "At birth"],
    correct: 0,
    explanation: "Most fetal organ development occurs during the first trimester."
  },
  {
    id: 9,
    question: "What is the term for the surgical delivery of a baby?",
    answers: ["Vaginal birth", "Cesarean section", "Forceps delivery", "Vacuum extraction"],
    correct: 1,
    explanation: "Cesarean section is the surgical procedure to deliver a baby."
  },
  {
    id: 10,
    question: "What is the function of oxytocin during labor?",
    answers: ["Relax uterine muscles", "Stimulate contractions", "Increase fetal heart rate", "Dilate cervix"],
    correct: 1,
    explanation: "Oxytocin stimulates uterine contractions during labor."
  },
  {
    id: 11,
    question: "Which test screens for gestational diabetes?",
    answers: ["Oral glucose tolerance test", "Complete blood count", "Urinalysis", "Biophysical profile"],
    correct: 0,
    explanation: "The oral glucose tolerance test is used to screen for gestational diabetes."
  },
  {
    id: 12,
    question: "What is the normal duration of the second stage of labor for a first-time mother?",
    answers: ["5-10 minutes", "20-60 minutes", "1-2 hours", "3-4 hours"],
    correct: 2,
    explanation: "The second stage of labor generally lasts 1 to 2 hours for primigravidas."
  },
  {
    id: 13,
    question: "Which pelvic shape is most favorable for vaginal delivery?",
    answers: ["Android", "Anthropoid", "Gynecoid", "Platypelloid"],
    correct: 2,
    explanation: "The gynecoid pelvis is considered the most favorable for vaginal birth."
  },
  {
    id: 14,
    question: "What is the role of prostaglandins in labor?",
    answers: ["Inhibit contractions", "Stimulate cervical ripening", "Increase fetal movement", "Prevent labor"],
    correct: 1,
    explanation: "Prostaglandins help soften and dilate the cervix before labor."
  },
  {
    id: 15,
    question: "Which medication is used to prevent postpartum hemorrhage?",
    answers: ["Magnesium sulfate", "Oxytocin", "Methylergonovine", "Terbutaline"],
    correct: 1, // Oxytocin is a primary choice. Methylergonovine is also used but Oxytocin is often first-line.
    explanation: "Oxytocin helps contract the uterus to prevent excessive bleeding. Methylergonovine can also be used."
  },
  {
    id: 16,
    question: "What is the leading cause of maternal mortality worldwide?",
    answers: ["Hypertensive disorders", "Hemorrhage", "Infection", "Eclampsia"],
    correct: 1,
    explanation: "Postpartum hemorrhage is a major cause of maternal death globally."
  },
  {
    id: 17,
    question: "What does the term 'nullipara' mean?",
    answers: ["Woman who has never given birth", "Woman pregnant for first time", "Woman with one child", "Woman who had miscarriage"],
    correct: 0,
    explanation: "Nullipara refers to a woman who has never given birth to a viable offspring."
  },
  {
    id: 18,
    question: "Which sign indicates labor is imminent?",
    answers: ["Braxton Hicks contractions", "Lightening", "Rupture of membranes", "Cervical effacement"],
    correct: 2,
    explanation: "Rupture of membranes (water breaking) often signals the onset of labor, though labor can start before or after."
  },
  {
    id: 19,
    question: "What is the safest position for a pregnant woman to lie in late pregnancy?",
    answers: ["Supine", "Left lateral", "Right lateral", "Prone"],
    correct: 1,
    explanation: "Left lateral position improves blood flow to the placenta and kidneys and reduces pressure on the vena cava."
  },
  {
    id: 20,
    question: "Which test confirms rupture of membranes?",
    answers: ["Nitrazine test", "Ultrasound", "Biophysical profile", "Non-stress test"],
    correct: 0,
    explanation: "The Nitrazine test uses pH paper to detect alkaline amniotic fluid, helping to confirm rupture of membranes."
  }
];
