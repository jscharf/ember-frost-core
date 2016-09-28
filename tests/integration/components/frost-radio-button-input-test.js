import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-radio-button-input',
  'Integration: FrostRadioButtonInputComponent',
  {
    integration: true
  },
  function () {
    it('throws error when not in frost-radio-button', function () {
      expect(
        () => {
          this.render(hbs`
            {{frost-radio-button-input}}
          `)
        },
        'assertion thrown when used without frost-radio-group'
      ).to.throw(/frost-radio-button-input/)
    })

    it('sets disabled property', function () {
      this.set('_setupAssertions', function () {
        return
      })

      this.render(hbs`
        {{frost-radio-button-input
          disabled=true
          _setupAssertions=_setupAssertions
        }}
      `)

      expect(
        this.$('.frost-radio-button-input').attr('disabled'),
        'disabled class is set'
      ).to.eql('disabled')
    })

    it('sets value property', function () {
      const value = 'test value'

      this.set('value', value)
      this.set('_setupAssertions', function () {
        return
      })

      this.render(hbs`
        {{frost-radio-button-input
          _setupAssertions=_setupAssertions
          value=value
        }}
     `)

      expect(
        this.$('.frost-radio-button-input').prop('value'),
        'value is set'
      ).to.eql('test value')
    })

    it('sets checked property', function () {
      const groupValue = 'testValue'
      const value = 'testValue'

      this.set('groupValue', groupValue)
      this.set('value', value)
      this.set('_setupAssertions', function () {
        return
      })

      this.render(hbs`
        {{frost-radio-button-input
          groupValue=groupValue
          _setupAssertions=_setupAssertions
          value=value
        }}
     `)

      expect(
        this.$('.frost-radio-button-input').prop('checked'),
        'checked is set'
      ).to.be.true
    })
  }
)
