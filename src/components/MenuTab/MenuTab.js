import React from "react";
import "./MenuTab.scss";
import { Tab } from 'semantic-ui-react'
import { Urlqr, Textqr, Callqr, Emailqr, Whatsappqr, Wifiqr } from "../Qrpages"

export function MenuTab() {
  const panes = [
    {
      menuItem: { key: 'link', icon: 'linkify', content: 'Links' },
      render: () => <Tab.Pane attached={false}><Urlqr /></Tab.Pane>,
    },
    {
      menuItem: { key: 'text', icon: 'align justify', content: 'Texto' },
      render: () => <Tab.Pane attached={false}><Textqr/></Tab.Pane>,
    },
    {
      menuItem: { key: 'call', icon: 'call', content: 'Llamada' },
      render: () => <Tab.Pane attached={false}><Callqr/></Tab.Pane>,
    },
    {
      menuItem: { key: 'email', icon: 'mail', content: 'Email' },
      render: () => <Tab.Pane attached={false}><Emailqr/></Tab.Pane>,
    },
    {
      menuItem: { key: 'whatsapp', icon: 'whatsapp', content: 'Whatsapp' },
      render: () => <Tab.Pane attached={false}><Whatsappqr/></Tab.Pane>,
    },
    {
      menuItem: { key: 'wifi', icon: 'wifi', content: 'Wifi' },
      render: () => <Tab.Pane attached={false}><Wifiqr/></Tab.Pane>,
    },
  ]
  return <Tab menu={{ secondary: true }} panes={panes} />
}
