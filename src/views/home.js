import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Interactive Set Theory Learning Module</title>
        <meta property="og:title" content="Interactive Set Theory Learning Module" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10">
              Test your knowledge with our interactive quiz.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Start Learning</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">basic set concepts</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14">home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Quiz</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Basic Set Concepts</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">quiz</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18">
              Welcome to the Sets Learning Module.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19">
              Learn about the basic concepts of sets.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">set operations</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21">Set Operations</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Practice set operations like union, intersection, and difference.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Take Quiz</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text24">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text25">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">Welcome to the World of Sets</span>
          </Fragment>
        }

        content1={
          <Fragment>
            <span className="home-text27">
              Explore the fascinating realm of sets through our interactive
              online learning module. Dive into the fundamental concepts and
              operations of sets with engaging quizzes and exercises.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment> <div style={{ marginBottom: '10px' }}> <span className="home-text28">
          There are several ways we can denote sets. Some of them are below: </span> </div> <div style={{ marginBottom: '10px' }}>
            <span className="home-text28"> <strong>Roster Notation:</strong> This is when all the elements
              of a set are listed in curly braces. For example, the notation A=&#123;a,
                c, f, e, h&#125; represents the set with the four elements a, c, f, e, and h.
                Especially for discrete sets. </span> </div> <div style={{ marginBottom: '10px' }}>
                  <span className="home-text28"> <strong>Set-Builder Notation:</strong> Specifies a rule for the
                    elements of a set. The general form of this notation is &#123;x ∣ x has property
                      P&#125; and is read as “the set of all x such that x has property P.” For
                      example, A=&#123;x ∣ x&gt;0&#125;, which reads as "the set of all x such that
                      x is greater than 0." It can be used for both discrete and continuous elements. </span>
                      </div> <div style={{ marginBottom: '10px' }}> <span className="home-text28"> <strong>Interval notation:</strong>
                        These sets of all the natural numbers between two numbers, a and b, with or without a and b.
                        For example, [a, b] = &#123;x | a ≤ x ≤ b&#125;. </span> </div> </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">Set Notation</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Null set:</strong> This is a set with no element, also called an empty set. Often denoted by &#123;&#125; or ∅.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Singleton set: </strong>This set has only one element—for example, B=&#123;2&#125;.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Finite set:</strong> This is a set that has a countable number of elements (discrete). For example, the set A of elements from 1 to 6, A=&#123;1, 2, 3, 4, 5, 6&#125;.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Infinite set: </strong>This is a set that has an uncountable number of elements (continuous). For example, the set B of elements of multiples of 5 greater than 60, B=&#123;65, 70, 75, 80, 85…&#125;.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Equal set:</strong> Two sets containing exactly the same elements. If A=&#123;1, 2, 3&#125; and B=&#123;3, 2, 1&#125;, then A=B.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text30">
      <strong>Universal set:</strong> A set that contains all possible elements in a given context, usually denoted as U.
    </span>
  </div>
  <div style={{ marginTop: '10px' }}>
    <span className="home-text30">
    </span>
  </div>
</Fragment>

        }
        feature1Title={
          <Fragment>
            <span className="home-text31">What Are Sets?</span>
          </Fragment>
        }
        feature1Description={
          <Fragment> <div style={{ marginBottom: '10px' }}> <span className="home-text32"> <strong>Definition
          of sets:</strong>
          A set is an unordered collection of distinct objects called elements or members of the set.
            A set is said to contain its elements. We write  <strong><em>a&isin;A </em> </strong>to denote that a is an element
            of the set A. The notation <strong><em> a &notin; A </em> </strong> denotes that a is not an element of the set A.
              It is common for sets to be denoted using uppercase letters. Lowercase letters are usually
              used to denote elements of sets. </span> </div> <div style={{ marginTop: '10px' }}>
                <span className="home-text32"> </span> </div> </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Types of Sets</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text34">Ready to master set operations?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              READ ON!
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text36">Start Learning</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text37">
            Relations and functions illustrate how elements of two sets
                    interact with each other. A relation between two sets can be
                    described as a subset of the Cartesian product of these sets.,
                    which pairs elements from one set with elements of another.
                      A function is a specific type of relation where every component
                      of the domain is associated with exactly one element in the codomain.
                      Functions can be categorized based on properties like <strong>injective <em>(one-to-one)</em></strong>,
                      <strong>surjective <em>(onto)</em></strong>, or <strong>bijective<em>(both)</em> </strong>.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment> <div style={{ marginBottom: '10px' }}> <span className="home-text38">
            Learn the fundamental definitions and types of sets to build a strong foundation
              in set theory. </span> </div> <div style={{ marginBottom: '10px' }}>
                <span className="home-text38"> <strong>Set Operations:</strong> </span> </div>
                <div style={{ marginBottom: '10px' }}> <span className="home-text38">
                  <strong>Union:</strong> Combines the elements between the sets, excluding duplicates.
                  The union of sets A and B, denoted by A ∪ B, is the set that contains
                    elements either in A or B, or both. An element x belongs to the union
                    of the sets A and B if x belongs to A or x belongs to B. This tells us
                    that A ∪ B = &#123;x ∣ x ∈ A ∨ x ∈ B&#125;. </span> </div>
                    <div style={{ marginBottom: '10px' }}> <span className="home-text38">
                      <strong>Intersection:</strong> Contains the elements that are common in the set. The intersection of the sets A and B, denoted by A ∩ B, is the set containing those elements in both A and B. An element x belongs to the intersection of the sets A and B if and only if x belongs to A and x belongs to B. This tells us that A ∩ B = &#123;x ∣ x ∈ A ∧ x ∈ B&#125;. If A ∩ B = ∅, then A and B are said to be disjoint. </span> </div> <div style={{ marginBottom: '10px' }}> <span className="home-text38">
                         <strong>Complement:</strong> These are the set of elements that are in the universal set but are not in the set that is complemented. An element belongs to A<sup>c</sup> if and only if x ∉ A. This tells us that 
          A<sup>c</sup> = &#123;x ∈ U ∣ x ∉ A&#125;. </span> </div> </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39">
              Let's Some Other Set Terminologies
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text40">Now Let's Familiarize ourselves with some set operations</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text41">
      The following are some other terminologies of sets:
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text41">
      <strong>Subsets: </strong>The set A is a subset of B, if and only if every element of A is also an element of B. We use the notation A &#8838; B to indicate that A is a subset of the set B. We see that A &#8838; B if and only if the quantification &#8704;x(x &#8712; A &#8594; x &#8712; B) is true.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text41">
      <strong>Proper sets: </strong>This is a set where a set A is a subset of a set B but that A &#8800; B. That is, A is a proper subset of B if and only if &#8704;x(x &#8712; A &#8594; x &#8712; B) &#8743; &#8707;x(x &#8712; B &#8743; x &#8713; A) is true.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text41">
      <strong>Power sets: </strong>A power set of a set A, denoted P(A), is the set of all subsets of A, including the empty set and A itself. For example, if A=&#123;1,2&#125;, then P(A) = &#123;&#8709;,&#123;1&#125;,&#123;2&#125;,&#123;1,2&#125;&#125;.
    </span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <span className="home-text41">
      <strong>Cardinality: </strong>The cardinality of a set is the number of elements in that set. For a finite set A, the cardinality is denoted by |A|. E.g., if A=&#123;1,2,3&#125;, then |A|=3. For power sets, if a set A has n elements, then its power set P(A) will have 2<sup>n</sup> elements.
    </span>
  </div>
</Fragment>


        }
        feature3Title={
          <Fragment>
            <span className="home-text42">
            Relations and Functions: How sets relate to each other through functions and relations.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text43">
              We started off by learning the basic definition of sets and how they are used to group
              objects or elements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text44">
              Then we explored the symbols and notation used to represent sets and
              their elements.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text45">Types of Sets</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46">
              We have also explored some of the different types of sets such as empty sets, finite sets,
              infinite sets, and more.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text47">Introduction to Sets</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text48">Set Notation</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49">
              Last but not least,  you will practice set operations like union, intersection, and difference
              through interactive quizzes and exercises below.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text50">Set Operations</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment> <span className="home-text51">
            Student
        </span> </Fragment>
        }
        // author1Position={
        //   <Fragment>
        //     <span className="home-text52">Math Teacher</span>
        //   </Fragment>
        // }
        author1Name={
          <Fragment>
            <span className="home-text53">Take these Quizzes on Union of Sets</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text54">Quiz on Difference of Sets</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text55">
            <Fragment> <span className="home-text51"> 2. If A = &#123;4, 6, 8, 10, 12&#125;,
          B = &#123;8, 10, 12, 14&#125;, C = &#123;12, 14, 16&#125;, D = &#123;16, 18&#125;, find:
        </span> <p>(a) A ∩ B</p> <p>(b) B ∩ C</p> <p>(c) A ∩ (C ∩ D)</p> <p>(d) A ∩ C</p> <p>(e) B ∩ D</p>
        <p>(f) (A ∩ B) ∪ C</p> <p>(g) A ∩ (B ∪ D)</p> <p>(h) (A ∩ B) ∪ (B ∩ C)</p> <p>(i)
            (A ∪ D) ∩ (B ∪ C)</p> </Fragment>
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text56">Quiz on Intersection of Sets</span>
          </Fragment>
        }
        // author4Position={
        //   <Fragment>
        //     <span className="home-text57">Educational Technologist</span>
        //   </Fragment>
        // }
        author4Name={
          <Fragment>
            <span className="home-text58">Miscellaneous</span>
          </Fragment>
        }
        content1={
          <Fragment>
  <span className="home-text59">
    Try your hands on these carefully selected Questions on Union, Intersection and Difference of Sets.
  </span>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
    <a href="https://www.math-only-math.com/practice-test-on-operations-on-sets.html">
      <button className="thq-button-animated thq-button-filled steps2-button">
        <span className="thq-body-small">Click Here For the Answers!</span>
      </button>
    </a>
  </div>
</Fragment>
        }
        // author3Position={
        //   <Fragment>
        //     <span className="home-text60">Parent</span>
        //   </Fragment>
        // }
        review1={
<Fragment> <span className="home-text61"> 1. If A = &#123;2, 3, 4, 5&#125;, B = &#123;4, 5,
  6, 7&#125;, C = &#123;6, 7, 8, 9&#125;, D = &#123;8, 9, 10, 11&#125;, find: </span> <p>(a)
    A ∪ B</p> <p>(b) A ∪ C</p> <p>(c) B ∪ C</p> <p>(d) B ∪ D</p> <p>(e) (A ∪ B) ∪ C</p> <p>(f)
      A ∪ (B ∪ C)</p> <p>(g) B ∪ (C ∪ D)</p> </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text62">Let's Try Some Quizzes</span>
          </Fragment>
        }
        review3={
          <Fragment> <span className="home-text51"> 3. If A = &#123;4, 7, 10, 13, 16, 19, 22&#125;, B = &#123;5, 9, 13,
          17, 20&#125;, C = &#123;3, 5, 7, 9, 11, 13, 15, 17&#125;, D = &#123;6, 11, 16, 21&#125;, then find: </span> <p>
            (a) A - C</p> <p>(b) D - A</p> <p>(c) D - B</p> <p>(d) A - D</p> <p>(e) B - C</p> <p>(f) C - D</p> <p>
              (g) B - A</p> <p>(h) B - D</p> <p>(i)
          D - C</p> <p>(j) A - B</p> <p>(k) C - B</p> <p>(l) C - A</p> </Fragment>
        }
        review4={
          <Fragment>
          <span className="home-text51">
            4. If A and B are two sets such that A ⊂ B, then what is A ∪ B?
          </span>
          <p>5. Find the union, intersection, and the difference (A - B) of the following pairs of sets:</p>
          <p>(a) A = The set of all letters of the word FEAST</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = The set of all letters of the word TASTE</p>
          <p>(b) A = &#123;x : x ∈ W, 0 &lt; x ≤ 7&#125;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = &#123;x : x ∈ W, 4 &lt; x &lt; 9&#125;</p>
          <p>(c) A = &#123;x | x ∈ N, x is a factor of 12&#125;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = &#123;x | x ∈ N, x is a multiple of 2, x &lt; 12&#125;</p>
          <p>(d) A = The set of all even numbers less than 12</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = The set of all odd numbers less than 11</p>
          <p>(e) A = &#123;x : x ∈ I, -2 &lt; x &lt; 2&#125;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = &#123;x : x ∈ I, -1 &lt; x &lt; 4&#125;</p>
          <p>(f) A = &#123;a, l, m, n, p&#125;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B = &#123;q, r, l, a, s, n&#125;</p>
          <p>6. Let X = &#123;2, 4, 5, 6&#125;, Y = &#123;3, 4, 7, 8&#125;, Z = &#123;5, 6, 7, 8&#125;, find:</p>
          <p>(a) (X - Y) ∪ (Y - X)</p>
          <p>(b) (X - Y) ∩ (Y - X)</p>
          <p>(c) (Y - Z) ∪ (Z - Y)</p>
          <p>(d) (Y - Z) ∩ (Z - Y)</p>
          <p>7. Let ξ = &#123;1, 2, 3, 4, 5, 6, 7&#125; and A = &#123;1, 2, 3, 4, 5&#125;, B = &#123;2, 5, 7&#125;, show that:</p>
          <p>(a) (A ∪ B)' = A' ∩ B'</p>
          <p>(b) (A ∩ B)' = A' ∪ B'</p>
          <p>(c) (A ∩ B) = B ∩ A</p>
          <p>(d) (A ∪ B) = B ∪ A</p>
          <p>8. Let P = &#123;a, b, c, d&#125;, Q = &#123;b, d, f&#125;, R = &#123;a, c, e&#125;, verify that:</p>
          <p>(a) (P ∪ Q) ∪ R = P ∪ (Q ∪ R)</p>
          <p>(b) (P ∩ Q) ∩ R = P ∩ (Q ∩ R)</p>
        </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text65">
             How many could you identify correctly?
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66">
              This describes the set B intersection the complement of A.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
    <span className="contact10-text18">
      Answers to the visuals of the venn diagram
    </span>
  </div>
</Fragment>

        }
        location2Description={
          <Fragment>
            <span className="home-text68">
            In this diagram of A, the shaded portion represents all the elements in the sets A and B.
            </span>
          </Fragment>
        }
        location3Description={
          <Fragment>
            <span className="home-text69">
            A is indicated by yellow shading, B is indicated by blue shading, and the green part
            appears where both yellow and blue have been shaded
            </span>
          </Fragment>
        }
        location4Description={
          <Fragment>
            <span className="home-text70">
            This represents the set B complement and consists of only the elements that are not in B but which are still in the universal set.
            </span>
          </Fragment>
        }
        location5Description={
          <Fragment>
            <span className="home-text71">
            The shaded part represents elements in the sets A and B
            </span>
          </Fragment>
        }
        location6Description={
          <Fragment>
            <span className="home-text72">
            This represents the set A complement and consists of only the elements
            that are not in A but which are still in the universal set.
            </span>
          </Fragment>
        }
        location7Description={
          <Fragment>
            <span className="home-text73">
            When the intersection of two sets is empty, we say that the two sets are DISJOINT.
            </span>
          </Fragment>
        }
        location8Description={
          <Fragment>
            <span className="home-text74">
            This describes the set B intersection the complement of A.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text69"> B - A</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text70">A∪B</span>
          </Fragment>
        }
        location3={
          <Fragment>
            <span className="home-text70">A in yellow; B in blue</span>
          </Fragment>
        }
        location4={
          <Fragment>
            <span className="home-text70">B′</span>
          </Fragment>
        }
        location5={
          <Fragment>
            <span className="home-text70">A∩B</span>
          </Fragment>
        }
        location6={
          <Fragment>
            <span className="home-text70">A′</span>
          </Fragment>
        }
        location7={
          <Fragment>
            <span className="home-text70">A∩B= Ø</span>
          </Fragment>
        }
        location8={
          <Fragment>
            <span className="home-text70">A-B</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        // link5={
        //   <Fragment>
        //     <span className="home-text71">Feedback</span>
        //   </Fragment>
        // }
        // link3={
        //   <Fragment>
        //     <span className="home-text72">FAQs</span>
        //   </Fragment>
        // }
        // link1={
        //   <Fragment>
        //     <span className="home-text73">About Us</span>
        //   </Fragment>
        // }
        termsLink={
          <Fragment>
            <span className="home-text74">Terms and Conditions</span>
          </Fragment>
        }
        // link2={
        //   <Fragment>
        //     <span className="home-text75">Contact Us</span>
        //   </Fragment>
        // }
        // link4={
        //   <Fragment>
        //     <span className="home-text76">Resources</span>
        //   </Fragment>
        // }
        cookiesLink={
          <Fragment>
            <span className="home-text77">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
