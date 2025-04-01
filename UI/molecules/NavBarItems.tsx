'use client';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { cn } from '@lib/utils';
import React, { forwardRef, useEffect, useRef } from 'react';

export function mergeReferences<T = unknown>(
    references: Array<React.MutableRefObject<T> | React.LegacyRef<T>>,
): React.RefCallback<T> {
    return (value) => {
        for (const reference of references)
            if (typeof reference === 'function')
                reference(value);
            else if (reference !== null)
                (reference as React.MutableRefObject<T | null>).current = value;
    };
}

const NavigationMenu = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
  >(({ className, children, ...props }, reference) => {
      const containerReference = useRef<HTMLElement>(null);

      useEffect(() => {
          const container = containerReference.current;

          if (!container) return;

          const updatePosition = (item: HTMLElement) => {
              const menuItemRect = item.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const position = {
                  top: menuItemRect.top - containerRect.top,
                  left: menuItemRect.left - containerRect.left,
              };
              container.style.setProperty('--radix-navigation-menu-item-active-top', `${position.top}px`);
              container.style.setProperty('--radix-navigation-menu-item-active-left', `${position.left}px`);
          };

          const mutationCallback = (mutationsList: MutationRecord[]) => {
              for (const mutation of mutationsList)
                  if ( mutation.type === 'attributes' && mutation.attributeName === 'data-state' &&
            mutation.target instanceof HTMLElement &&  mutation.target.hasAttribute('aria-expanded') &&  mutation.target.dataset.state === 'open' )
                      updatePosition(mutation.target);
          };
          const observer = new MutationObserver(mutationCallback);

          observer.observe(container, {
              childList: true,
              attributes: true,
              subtree: true,
          });

          return () => {
              observer.disconnect();
          };
      }, []);

      return (
          <NavigationMenuPrimitive.Root
              ref={mergeReferences([reference, containerReference])}
              className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
              {...props}
          >
              {children}
              <NavigationMenuViewport />
          </NavigationMenuPrimitive.Root>
      );
  });
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            'group flex flex-1 list-none items-center space-x-1',
            className
        )}
        {...props}
    />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
    'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  { hideChevron?: boolean } & React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, hideChevron, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), 'group', className)}
        {...props}
    >
        {children}{' '}
        {!hideChevron && (
            <ChevronDownIcon
                className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
            />
        )}
    </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
            className
        )}
        {...props}
    />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, reference) => (
    <div
        className={cn(
            'absolute left-0 top-full flex translate-x-[var(--radix-navigation-menu-item-active-left)] transform justify-center transition-transform duration-100',
        )}
    >
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-top-center bg-popover text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className,
            )}
            ref={reference}
            {...props}
        />
    </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className
        )}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
};
