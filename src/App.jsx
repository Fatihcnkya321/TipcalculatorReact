import './App.css'

function App() {
  return (
    <>
    <ImageContainer />

    <div className="container">
      <SelectSection />
      <ResetSection />
    </div>
    </>
  )
}

function ImageContainer() {
    return (
      <div class="img_container">
          <img src="images/splitter_logo.png" alt=""/>
      </div>
    )
}

function SelectSection() {
  return (
    <div class="select_section">
            <h3>Bill</h3>
            <input class="bill" type="number" placeholder="0"/>
            <h3>Select Tip %</h3>

            <div class="select_buttons">
                <button class="select_tip">5%</button>
                <button class="select_tip">10%</button>
                <button class="select_tip">15%</button>
                <button class="select_tip">25%</button>
                <button class="select_tip">50%</button>
                <input class="custom_tip" type="number" placeholder="Custom"/>
            </div>

            <div class="select_section_texts">
                <h3>Number of People</h3>
                <h3 class="people_error"></h3>
            </div>

            <input class="people" type="number" required placeholder="0"/>
    </div>
  )
}

function ResetSection() {
  return (
    <div class="reset_section">
            <div class="tips">
                <div class="reset_texts">
                    <h2>Tip Amount</h2>
                    <h3>/ person</h3>
                </div>
                <h1 class="tip_amount">$0.00</h1>
            </div>

            <div class="tips">
                <div class="reset_texts">
                    <h2>Total</h2>
                    <h3>/ person</h3>
                </div>
                <h1 class="total">$0.00</h1>
            </div>

            <button class="reset">RESET</button>
      </div>
  )
}

export default App
