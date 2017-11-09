import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = [
    {
      'label': 'Configuration',
      'items': [
        [
          {
            'label': 'Settings',
            'routerLink': 'settings',
            'items': [
              {
                'label': 'Lens 1',
                'routerLink': 'lens1'
              },
              {
                'label': 'Lens 2',
                'routerLink': 'lens2'
              },
              {
                'label': 'Lens 3',
                'routerLink': 'lens3'
              }
            ]
          },
          {
            'label': 'User',
            'items': [
              {
                'label': 'Manage Users'
              }
            ]
          }
        ],
        [
          {
            'label': 'Color',
            'items': [
              {
                'label': 'Measure Colors'
              },
              {
                'label': 'Select Colors'
              },
              {
                'label': 'Verify Colors'
              },
              {
                'label': 'Spatial Color'
              }
            ]
          },
          {
            'label': 'Communication',
            'items': [
              {
                'label': 'Network Configuration'
              }
            ]
          }
        ],
        [
          {
            'label': 'Automation',
            'items': [
              {
                'label': 'Automation 1'
              },
              {
                'label': 'Automation 2'
              }
            ]
          },
          {
            'label': 'Audio',
            'items': [
              {
                'label': 'Audio 1'
              },
              {
                'label': 'Audio 2'
              }
            ]
          }
        ]
      ]
    },
    {
      'label': 'Control',
      'items': [
        [
          {
            'label': 'Projector',
            'items': [
              {
                'label': 'Item 1'
              },
              {
                'label': 'Item 2'
              },
              {
                'label': 'Item 3'
              }
            ]
          },
          {
            'label': 'Audio',
            'items': [
              {
                'label': 'Audio 1'
              },
              {
                'label': 'Audio 2'
              }
            ]
          }
        ],
        [
          {
            'label': 'Light Source',
            'items': [
              {
                'label': 'Light 1'
              },
              {
                'label': 'Light 2'
              }
            ]
          }
        ]
      ]
    }
  ];

}
