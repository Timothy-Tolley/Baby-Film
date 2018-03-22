import React from 'react'
import {connect} from 'react-redux'

import './faqs.css'
import DetachedHead from '../DetachedHead/DetachedHead'

class Faqs extends React.Component {
  render () {
    return (
      <div className = 'faqs-container'>
        <DetachedHead />
        <h2 className = 'faq-header'>  - FAQs - </h2>
        <div className = 'faq-texts-container' >
          <br/>
          <h3 className = 'faq-question'> Where did the story come from? </h3>
          <br/>
          <p className = 'faq-text'>
          Like many mothers, Marion experienced postnatal depression after our first daughter was born. We felt an urgent need for community around us and weren’t really prepared for how isolating parenthood can feel. These feelings were the springboard for our initial idea. In Oct 2014 we participated in the Aotearoa Short Film Lab script development workshop.  The feedback we received there and, in particular, the follow-up mentoring from Jake Mahaffy (Independent Spirit nominee and Venice Film Festival award-winner for Free in Deed) helped shape the idea into the script it became. This story is important to us because it is about family and reaching out to community when you need help. Our busy modern lives can stop us from connecting to and noticing others in need.  You can read more about Marion’s experiences with postnatal depression and their connections to the film in <a href = 'https://www.facebook.com/notes/team-mm/do-i-have-postnatal-depression/1689911874356322/' className = 'faq-blog-link'> a blog article here. </a>
          </p>
          <br/>
          <h3 className = 'faq-question'> What was the biggest challenge you faced making the film? </h3>
          <br/>
          <p className = 'faq-text'>
            {'Juggling a film schedule around the chaotic disrupted routines of two young children adds extra challenges. Delivering your best creative work can be difficult when your last uninterrupted night of sleep was four years ago. We also knew that Marion’s focus would be regularly interrupted by the on-set feeding schedule of an eight-month-old. We decided early on that it would be better to adapt our filmmaking process to fit in with our parenting needs. We scheduled a longer shoot with shorter days meaning parents could go home to their kids while they were still awake.'}
          </p>
          <p className = 'faq-text'>
            {'We approached women for most of the crew roles, in particular young creative mothers looking for projects to help return to the workforce. This meant we were able to work with some amazing women who might not otherwise have been able to work on the shoot. There were children at all our production meetings, at grading sessions and often onset. This helped create a wonderful family vibe throughout the crew. It also had a direct impact on the actors. In a film all about mothers connecting to each other and longing for the presence of children, nothing makes that feeling more immediate and translatable on screen than cuddling a baby 30 seconds before action.'}
          </p>
          <br/>
          <h3 className = 'faq-question'> How have people responded to the material? </h3>
          <br/>
          <p className = 'faq-text'>
            {"We knew that the subject matter of Baby? was taboo and this was one of the reasons we felt it was so important to explore.  However, it wasn’t until after we received funding from the New Zealand Film Commission and attended a workshop with fellow recipients that we really saw its potential to connect emotionally to audiences. There was a pitching session where we all discussed each other's ideas.  After only a few minutes of describing the story, complete strangers were opening up about their own family’s struggles with postnatal depression and how tragic it is that people don’t feel able to talk about it. In the months since then, the more we have talked about our experiences, the more others have come forward wanting to share theirs.  Our extended family has lost cherished members to suicide and young babies to illness so we feel that creating something which encourages people to connect at times of fragility is one of the best things you could aspire to as artists. The story of Baby? is tragically sad but we have tried to craft it with warmth and humour in a way that gives audiences a textured emotional journey and a starting point to talk. "}
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(Faqs)
