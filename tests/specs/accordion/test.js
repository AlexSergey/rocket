var React = require('react'),
    TestUtils = require('react/addons').addons.TestUtils;

var Accordion = require('../../../client/source/app/components/accordion.jsx');

describe('Accordion', function() {

    it('render and locate element', function() {
        // Render into document

        var input = [{
            name: 'Title 1',
            content: 'Content belongs to title 1',
            showOnLoad: true
        },{
            name: 'Title 2',
            content: 'Content belongs to title 2',
            showOnLoad: true
        }];

        var accordion = TestUtils.renderIntoDocument( <Accordion data={input} /> );
        expect(TestUtils.isCompositeComponent(accordion)).to.be.true;
    });

    it('should build the layout from an array of objects passed as prop', function() {

        var input = [{
            name: 'Title 1',
            content: 'Content belongs to title 1',
            showOnLoad: true
        },{
            name: 'Title 2',
            content: 'Content belongs to title 2',
            showOnLoad: true
        }];

        var accordion = TestUtils.renderIntoDocument( <Accordion data={input}/> );
        var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-header');
        var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');

        expect(headers.length).to.equal(2);
        expect(contents.length).to.equal(2);

        expect(headers[0].getDOMNode().textContent).to.equal('Title 1');
        expect(headers[1].getDOMNode().textContent).to.equal('Title 2');

        expect(contents[0].getDOMNode().textContent).to.equal('Content belongs to title 1');
        expect(contents[1].getDOMNode().textContent).to.equal('Content belongs to title 2');
    });

    it('should hide all the contents by default unless specified by a flag', function(){
        var input = [{
            name: 'Title 1',
            content: 'Content belongs to title 1'
        },{
            name: 'Title 2',
            content: 'Content belongs to title 2',
            showOnLoad: true
        }];

        var accordion = TestUtils.renderIntoDocument( <Accordion data={input}/> );
        var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
        expect(contents.length).to.equal(1);
        expect(contents[0].getDOMNode().textContent).to.equal('Content belongs to title 2');
    });

    it('should be able to toggle the content by clicking on the respective title.', function(){
        var input = [{
            name: 'Title 1',
            content: 'Content belongs to title 1'
        },{
            name: 'Title 2',
            content: 'Content belongs to title 2'
        }];

        var accordion = TestUtils.renderIntoDocument( <Accordion data={input}/> );
        var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-header');
        var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');

        expect(contents.length).to.equal(0);
        TestUtils.Simulate.click(headers[0].getDOMNode());
        contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
        expect(contents.length).to.equal(1);
        expect(contents[0].getDOMNode().textContent).to.equal('Content belongs to title 1');
        TestUtils.Simulate.click(headers[0].getDOMNode());
        contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
        expect(contents.length).to.equal(0);
    });
});