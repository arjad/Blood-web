import React, { useState , useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import "./privacypolicy.css";

export default function Privacypolicy() 
{
  const [value, setValue] = useState('');
  const Urdutext="خون کا عطیہ دے کر، آپ ان خاندانوں کی مدد کر سکتے ہیں جو حادثات یا صدمے کا سامنا کر رہے ہیں، زچگی کی پیچیدگیوں کا سامنا کرنے والی مائیں، دل کی سرجری کروانے والے باپ، کیموتھراپی کے علاج سے گزرنے والے بچے، چھوٹے پھیپھڑوں کے ساتھ سانس لینے کی کوشش کرنے والے قبل از وقت بچے، یا شدید خون کی کمی میں مبتلا دادا دادی کی مدد کر سکتے ہیں۔";
  const Engtext ="By donating blood, you can help families who have been in accidents or experienced trauma, mothers experiencing labor complications, fathers having heart surgery, children undergoing chemotherapy treatments, premature babies trying to breathe with tiny lungs, or grandparents suffering from severe anemia.";
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    setValue(Engtext);
  }, [])
    return (
        <div>
             <div className="wallpaper mb-5 border container-fluid">
            <h1>Privacy Policy</h1>
            {/* book start */}
            <div class="imgLoader"></div>

            <div class="containers">

              <div class="book">
                <div class="gap"></div>
                <div class="pages">
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                  <div class="page"></div>
                </div>
                <div class="flips">
                  <div class="flip flip1">
                    <div class="flip flip2">
                      <div class="flip flip3">
                        <div class="flip flip4">
                          <div class="flip flip5">
                            <div class="flip flip6">
                              <div class="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //book ends */}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='container'>
          {value}
        </div>
        <div className='center'> 
        <button className='Speakbtn' onClick={() => speak({ text: value })}>Speak</button>
        <button className="m-3 Urdubtn" onClick={() => setValue(Urdutext)}>Convert To Urdu</button>
        </div>
        
    </div>)
}
