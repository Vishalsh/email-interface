import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import loadingStates from 'constants/loadingStates';

import { Mailbox } from '../Mailbox';

describe('Mailbox', () => {
  const getEmailsMock = jest.fn();
  const props = {
    match: {
      params: {
        mailbox: 'inbox'
      }
    },
    mailbox: {
      emails: [{
        id: 1,
        subject: 'subject 1',
        from: 'MS Dhoni'
      }, {
        id: 1,
        subject: 'subject 2',
        from: 'Virat Kohli'
      }],
      loadingState: loadingStates.LOADED
    },
    getEmails: getEmailsMock
  };
  const component = shallow(<Mailbox {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(getEmailsMock).not.toHaveBeenCalled();
  });

  it('should trigger getEmails for the mailbox when not present', () => {
    const propsWithoutEmails = {
      ...props,
      mailbox: undefined
    };
    shallow(<Mailbox {...propsWithoutEmails} />);

    expect(getEmailsMock).toHaveBeenCalled();
  });

  it('should trigger getEmails on change of mailbox when already not present', () => {
    getEmailsMock.mockReset();

    component.setProps({
      match: {
        params: {
          mailbox: 'inbox'
        }
      },
      mailbox: {
        emails: [{
          id: 1,
          subject: 'subject 1',
          from: 'MS Dhoni'
        }, {
          id: 1,
          subject: 'subject 2',
          from: 'Virat Kohli'
        }],
        loadingState: loadingStates.LOADED
      },
    });

    expect(getEmailsMock).not.toHaveBeenCalled();

    component.setProps({
      match: {
        params: {
          mailbox: 'sent'
        }
      },
      mailbox: {
        emails: [{
          id: 1,
          subject: 'subject 1',
          from: 'MS Dhoni'
        }, {
          id: 1,
          subject: 'subject 2',
          from: 'Virat Kohli'
        }],
        loadingState: loadingStates.LOADED
      },
    });

    expect(getEmailsMock).not.toHaveBeenCalled();

    component.setProps({
      match: {
        params: {
          mailbox: 'trash'
        }
      },
      mailbox: {
        emails: [],
        loadingState: loadingStates.AT_REST
      }
    });

    expect(getEmailsMock).toHaveBeenCalled();
  });
});