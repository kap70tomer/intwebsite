import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import LocationDisplay from "../Components/LocationDisplay";
import '../Styles/about.css'

export default function AboutPage() {
    return(
        <>
            <Card className ="about-studio">
               <CardHeader> <h1>הסטודיו שלנו</h1></CardHeader>
                <p className="our-studio-para"> 
                    פעמים רבות אנחנו נתקלים בשאלה של מה לבחור, למי להקשיב ולמי לשתף את רחשי הלב
                    וכשזה מגיעה לגוף שלנו, זה נהיה קשה עוד יותר.
                    יש שלל זוויות להתקעקע דרכם, זיכרון, דימוי עצמי, תקשורת עם סביבה, אפילו ספונטניות חסרת הסבר
                    המשותף לכולן, הן שלנו, והן מגיעות מבפנים.
                    מקור ההשראה לסטודיו הוא מהמילה "אינטואיציה" 
                    כי בכול הנווגע לקעקועים ועיצוב הגוף, הכול תמון בקול הפנימי
                    יחד, בעבודה משותפת קשובה נוכל לייצר כול קעקוע משלל אופציות.
                    כדי שיהיה מיוחד במינו
                </p>
            </Card> 
            <br></br>
            
            <div className="container location-warapper"> 
            <LocationDisplay/>
            </div>      
            
            <br/>

            <Card className="profolio container">
                <CardHeader>
                <h4>    
                    קצת על עצמי 
                </h4>
                </CardHeader>
                <p>
                    במעמד של אומן העוסק בקעקועים,
                    אני קם עם תחושה של שליחות,
                <br/>
                    יש דברים שצריכים להעשות בעולם בקו אחיד,
                    בלי מעידות ובסטנדרת גבוהה לשם תוצאה ממוקסמת
                <br/>   
                    כאן בסטודיו אנחנו עובדים יחד יד ביד,
                    בפתיחות ומקצועיות
                <br/>
                    .להבנת כול קונספט וביטוי שנרצה מהקעקוע שלכם, ולהבאת הדיוק המירבי בסגנון האישי שלכם
                <br/>
                    בניית קעקוע היא עבודה שמצריכה צומת לב רבה,
                <br/>  
                    ומחשבה על כול פרט, כאן תקבלו ליווי צמוד,
                    עד לתוצאה מושלמת ושמירה עליה להמשך
                </p>
            </Card>
            <br/> 
            <Card className="mystyles container">
                <CardHeader>
                <h4>הסגנון שאני מביא</h4>
                </CardHeader>
                <p>
                    ,בלאק-וורק , אוטנטים שבטיים טרייבלים
                    תמונות מרובות פרטים, אבסטרקטי, ראליסטי, סקאצ', גוטי אפל ופסיכודאלי,
                    <br/>
                    
                    כול סגנון הוא עולם, והראש שלי פתוח להכל, כל רעיון שלכם יכול להיות מציאות,
                    אז תרגישו חופשי לשתף ולהציע כל דבר שעל לבכם וביחד ניצור
                </p>
            </Card>
            <br/>
            <Card className="QandA container">
                <CardHeader>
                <h4>
                    שאלות נפוצות
                </h4>
                </CardHeader>
                <br/>
                <h3>
                    ? מה עלות קעקוע
                </h3>
                    המחיר נקבע לפי כמה עבודה נדרשה,
                    ומורכב מ:
                <li>    פגישת יעוץ  </li>
                <li>    סקיצה ראשונית   </li>
                <li>    שעות העבודה שהם לפי מחיר קבוע   </li>
                <br/>
                <h3>
                    ? מהיא פגישת יעוץ
                </h3>
                <p>
                    .פגישת יעוץ מתחילה מ45 דקות, עד לשעה וחצי
                <br/>
                    
                    .בה אנחנו מכירים ודנים ברעיון ובכול האפשרויות שבו
                <br/>
                    
                    .בסוף הפגישה תצאו עם סקיצה שמותאמת למידות הגוף
                </p>                
                <h3>
                    ? האם אפשר להגיע רק ליעוץ או סקיצה
                </h3>
                <p>
                    בוודאי, כול לקוח יכול להחליט שהוא מגיע להתייעצות בלבד
                <br/>

                    בכול נושא אומנותי שיבחר לרלוונטי, גם אם לא בנושא קעקוע, המחיר אחיד
                <br/>
                    ועדיין יקבל סקיצה ראשונית בנושא שדובר       
                </p>

                <h3>
                    ? כמה זה כואב להתקעקע
                </h3>
                <p>
                    הכאב נסבל לאורך זמן, אך חשוב להבין שהכאב משתנה לפי האזורים, ומידות הגוף
                </p>
                <h3>
                    ? האם ניתן להגיע בליווי
                </h3>
                <p>
                    ,ניתן להגיע בליווי אדם אחד בתאום מראש לשם שמירה על כללי ריחוק ובטיחות בתקופת הקורונה    
                <br/>
                    .כמו כן לשם שמירה על תחושת פגישה אישית
                </p>
                <h3>
                    תשלום
                </h3>
                <p>
                    .מכבד העברה בנקאית, בדיגיטל ובמזומן
                </p>
            </Card>
            
        </>
    );
};